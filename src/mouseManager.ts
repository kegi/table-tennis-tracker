import _ from 'lodash'

const LEFT_BUTTON = 0
const RIGHT_BUTTON = 2

export interface MouseManagerListeners {
  onLeftClick? (): void;

  onLeftLongClick? (): void;

  onLeftButtonDown? (): void,

  onLeftButtonUp? (): void,

  onRightClick? (): void;

  onRightLongClick? (): void;

  onRightButtonDown? (): void,

  onRightButtonUp? (): void,
}

export interface MouseManagerParameters {
  throttleClickDelay?: number;

  longClickDuration?: number;
}

export default class MouseManager {

  private listeners?: MouseManagerListeners
  private longClickDuration = 2000
  private throttleClickDelay = 1000
  private leftClickTimeout: ReturnType<typeof setTimeout> | undefined
  private rightClickTimeout: ReturnType<typeof setTimeout> | undefined

  private buttonsClickTime = {
    [LEFT_BUTTON]: 0,
    [RIGHT_BUTTON]: 0,
  }

  public constructor (
    parameters?: MouseManagerParameters,
  ) {
    Object.assign(this, parameters)
    this.bindEvents()
  }

  public setListeners (listeners: MouseManagerListeners) {
    this.listeners = listeners
    Object.assign(this, listeners)
  }

  private bindEvents () {
    document.addEventListener('mousedown', this.onMouseDown)
    document.addEventListener('mouseup', this.onMouseUp)
    document.addEventListener('contextmenu', this.onContextMenu)
  }

  public destroy () {
    document.removeEventListener('mousedown', this.onMouseDown)
    document.removeEventListener('mouseup', this.onMouseUp)
    document.removeEventListener('contextmenu', this.onContextMenu)

    if (this.leftClickTimeout) {
      clearTimeout(this.leftClickTimeout)
      this.leftClickTimeout = undefined
    }

    if (this.rightClickTimeout) {
      clearTimeout(this.rightClickTimeout)
      this.rightClickTimeout = undefined
    }
  }

  private throttle = (func: any): any => _.throttle(
    func,
    this.throttleClickDelay,
    {
      leading: true,
      trailing: false,
    },
  )

  private onMouseDown = (event: MouseEvent) => {
    switch (event.button) {
      case LEFT_BUTTON: {
        this.buttonsClickTime[LEFT_BUTTON] = Date.now()
        this.leftButtonDownCallback()

        if (this.leftClickTimeout) {
          clearTimeout(this.leftClickTimeout)
        }

        this.leftClickTimeout = setTimeout(() => {
          this.watchLeftLongClick()
        }, this.longClickDuration)

        break
      }
      case RIGHT_BUTTON: {
        this.buttonsClickTime[RIGHT_BUTTON] = Date.now()
        this.rightButtonDownCallback()

        if (this.rightClickTimeout) {
          clearTimeout(this.rightClickTimeout)
        }

        this.rightClickTimeout = setTimeout(() => {
          this.watchRightLongClick()
        }, this.longClickDuration)
      }
    }
  }

  private watchLeftLongClick = () => {
    if (this.isLongClick(this.buttonsClickTime[LEFT_BUTTON])) {
      this.buttonsClickTime[LEFT_BUTTON] = 0
      if (this.leftClickTimeout) {
        clearTimeout(this.leftClickTimeout)
      }
      this.leftClickTimeout = setTimeout(() => {
        this.watchLeftLongClick()
      }, this.longClickDuration)
      this.leftLongClickCallback()
    }
  }

  private watchRightLongClick = () => {
    if (this.isLongClick(this.buttonsClickTime[RIGHT_BUTTON])) {
      this.buttonsClickTime[RIGHT_BUTTON] = 0
      if (this.rightClickTimeout) {
        clearTimeout(this.rightClickTimeout)
      }
      this.rightClickTimeout = setTimeout(() => {
        this.watchRightLongClick()
      }, this.longClickDuration)
      this.rightLongClickCallback()
    }
  }

  private isLongClick = (clickTime: number) => (
    Date.now() - clickTime >= this.longClickDuration
  )

  private onMouseUp = (event: MouseEvent) => {
    switch (event.button) {
      case LEFT_BUTTON: {

        if (this.leftClickTimeout) {
          clearTimeout(this.leftClickTimeout)
          this.leftClickTimeout = undefined
        }

        const isLongClick = this.isLongClick(this.buttonsClickTime[LEFT_BUTTON])

        this.leftButtonUpCallback()

        if (this.buttonsClickTime[LEFT_BUTTON] > 0) {
          this.buttonsClickTime[LEFT_BUTTON] = 0

          if (isLongClick) {
            this.leftLongClickCallback()
          } else {
            this.leftClickCallback()
          }
        }

        break
      }
      case RIGHT_BUTTON: {

        if (this.rightClickTimeout) {
          clearTimeout(this.rightClickTimeout)
          this.rightClickTimeout = undefined
        }

        const isLongClick = this.isLongClick(
          this.buttonsClickTime[RIGHT_BUTTON])

        this.rightButtonUpCallback()

        if (this.buttonsClickTime[RIGHT_BUTTON] > 0) {
          this.buttonsClickTime[RIGHT_BUTTON] = 0

          if (isLongClick) {
            this.rightLongClickCallback()
          } else {
            this.rightClickCallback()
          }
        }
      }
    }
  }

  private leftClickCallback = this.throttle(
    () => {
      if (this.listeners && this.listeners.onLeftClick) {
        this.listeners.onLeftClick()
      }
    },
  )

  private leftLongClickCallback = this.throttle(
    () => {
      if (this.listeners && this.listeners.onLeftLongClick) {
        this.listeners.onLeftLongClick()
      }
    },
  )

  private leftButtonDownCallback = () => {
    if (this.listeners && this.listeners.onLeftButtonDown) {
      this.listeners.onLeftButtonDown()
    }
  }

  private leftButtonUpCallback = () => {
    if (this.listeners && this.listeners.onLeftButtonUp) {
      this.listeners.onLeftButtonUp()
    }
  }

  private rightClickCallback = this.throttle(
    () => {
      if (this.listeners && this.listeners.onRightClick) {
        this.listeners.onRightClick()
      }
    },
  )

  private rightLongClickCallback = this.throttle(
    () => {
      if (this.listeners && this.listeners.onRightLongClick) {
        this.listeners.onRightLongClick()
      }
    },
  )

  private rightButtonDownCallback = () => {
    if (this.listeners && this.listeners.onRightButtonDown) {
      this.listeners.onRightButtonDown()
    }
  }

  private rightButtonUpCallback = () => {
    if (this.listeners && this.listeners.onRightButtonUp) {
      this.listeners.onRightButtonUp()
    }
  }

  private onContextMenu = (event: MouseEvent) => {
    event.preventDefault()
    return false
  }
}
