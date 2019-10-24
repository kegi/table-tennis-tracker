import React, { Component } from 'react'

import styles from './styles/styles.module.scss'

export default class Page1 extends Component {
  render () {
    return (
      <>
        <h1><i className="far fa-star"/> Page 1</h1>

        <div className="foo">
          <div className="bar">
            This text should NOT be styled
          </div>
        </div>

        <div className={styles.foo}>
          <div className={styles.bar}>
            This text SHOULD be styled
          </div>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          dignissim venenatis nunc, nec pharetra felis. Cras rutrum urna nec
          urna semper hendrerit. Quisque eleifend tellus elit, non ultrices
          lacus molestie vitae. Vestibulum elementum, ipsum sed luctus
          elementum, lectus massa gravida felis, in sodales nulla augue quis
          quam. Aenean augue arcu, accumsan sit amet lacus ut, volutpat tempus
          nibh. Sed mattis auctor arcu, vitae porta orci aliquam sit amet. Sed
          sed laoreet risus. Donec eget massa ac nunc finibus laoreet et et
          ipsum. Fusce sed felis eget felis pharetra finibus a a ligula.
          Pellentesque sodales orci id diam suscipit, vel convallis risus
          consectetur. Etiam lacinia in diam quis ultrices. Aliquam neque mi,
          dapibus ut finibus in, maximus quis eros.</p>

        <p>Proin quis mollis magna. In ut sapien sit amet sem dignissim
          venenatis. Donec consectetur, ante ac accumsan accumsan, justo turpis
          consequat est, vitae sollicitudin felis mauris eget lacus. Mauris
          sodales hendrerit sem, sit amet finibus tellus tempor ut. Phasellus
          vestibulum facilisis sodales. Quisque ultrices felis in ultricies
          mattis. Integer iaculis massa vel tortor malesuada, nec vestibulum
          massa eleifend. Morbi placerat leo sit amet odio semper, eu blandit
          lectus tincidunt. Duis est tortor, mattis non eleifend quis, viverra
          elementum velit. Nam egestas quis lacus vitae vulputate.</p>

        <p>Etiam auctor bibendum mollis. Donec congue dui sed commodo tempus.
          Vivamus tellus erat, maximus at nulla eget, imperdiet hendrerit ex.
          Praesent sodales arcu non ex egestas, ac consequat tortor vulputate.
          Fusce suscipit nibh nec libero venenatis, eget posuere dolor faucibus.
          Suspendisse dolor neque, pretium a libero eget, maximus porttitor est.
          Vivamus tellus odio, lobortis nec leo a, auctor convallis diam. Sed
          blandit in est ut laoreet.</p>

        <p>Cras diam tortor, dapibus sit amet lorem a, hendrerit luctus dui.
          Fusce in libero ipsum. Duis ut dapibus eros. Vivamus eleifend diam sed
          lectus pharetra, bibendum porta orci luctus. Fusce accumsan id quam
          quis suscipit. Praesent quis justo nec risus pharetra egestas eget sit
          amet arcu. Nulla facilisi. Sed vitae ex condimentum, scelerisque dolor
          quis, sollicitudin tellus. Nam imperdiet dapibus laoreet. Duis
          malesuada a sem at rhoncus.</p>

        <p>Nam vehicula eros id lacus varius mollis vitae ac sapien. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Maecenas hendrerit luctus nibh, ut condimentum ipsum fermentum
          ut. Nunc bibendum sed massa id accumsan. Praesent orci metus, aliquet
          nec rutrum quis, egestas quis lorem. Integer ac diam eu diam malesuada
          dignissim. In viverra nisl ut ipsum cursus, id accumsan libero mattis.
          Nunc a vulputate erat, ut rutrum felis. Sed bibendum elit sit amet
          pretium rutrum. Phasellus pretium quis erat a rhoncus. Aliquam
          volutpat ut lectus sit amet gravida. Suspendisse lacinia lobortis
          pellentesque.</p>

        <p>Proin quis mollis magna. In ut sapien sit amet sem dignissim
          venenatis. Donec consectetur, ante ac accumsan accumsan, justo turpis
          consequat est, vitae sollicitudin felis mauris eget lacus. Mauris
          sodales hendrerit sem, sit amet finibus tellus tempor ut. Phasellus
          vestibulum facilisis sodales. Quisque ultrices felis in ultricies
          mattis. Integer iaculis massa vel tortor malesuada, nec vestibulum
          massa eleifend. Morbi placerat leo sit amet odio semper, eu blandit
          lectus tincidunt. Duis est tortor, mattis non eleifend quis, viverra
          elementum velit. Nam egestas quis lacus vitae vulputate.</p>

        <p>Etiam auctor bibendum mollis. Donec congue dui sed commodo tempus.
          Vivamus tellus erat, maximus at nulla eget, imperdiet hendrerit ex.
          Praesent sodales arcu non ex egestas, ac consequat tortor vulputate.
          Fusce suscipit nibh nec libero venenatis, eget posuere dolor faucibus.
          Suspendisse dolor neque, pretium a libero eget, maximus porttitor est.
          Vivamus tellus odio, lobortis nec leo a, auctor convallis diam. Sed
          blandit in est ut laoreet.</p>

        <p>Cras diam tortor, dapibus sit amet lorem a, hendrerit luctus dui.
          Fusce in libero ipsum. Duis ut dapibus eros. Vivamus eleifend diam sed
          lectus pharetra, bibendum porta orci luctus. Fusce accumsan id quam
          quis suscipit. Praesent quis justo nec risus pharetra egestas eget sit
          amet arcu. Nulla facilisi. Sed vitae ex condimentum, scelerisque dolor
          quis, sollicitudin tellus. Nam imperdiet dapibus laoreet. Duis
          malesuada a sem at rhoncus.</p>

        <p>Nam vehicula eros id lacus varius mollis vitae ac sapien. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Maecenas hendrerit luctus nibh, ut condimentum ipsum fermentum
          ut. Nunc bibendum sed massa id accumsan. Praesent orci metus, aliquet
          nec rutrum quis, egestas quis lorem. Integer ac diam eu diam malesuada
          dignissim. In viverra nisl ut ipsum cursus, id accumsan libero mattis.
          Nunc a vulputate erat, ut rutrum felis. Sed bibendum elit sit amet
          pretium rutrum. Phasellus pretium quis erat a rhoncus. Aliquam
          volutpat ut lectus sit amet gravida. Suspendisse lacinia lobortis
          pellentesque.</p>

        <p>Proin quis mollis magna. In ut sapien sit amet sem dignissim
          venenatis. Donec consectetur, ante ac accumsan accumsan, justo turpis
          consequat est, vitae sollicitudin felis mauris eget lacus. Mauris
          sodales hendrerit sem, sit amet finibus tellus tempor ut. Phasellus
          vestibulum facilisis sodales. Quisque ultrices felis in ultricies
          mattis. Integer iaculis massa vel tortor malesuada, nec vestibulum
          massa eleifend. Morbi placerat leo sit amet odio semper, eu blandit
          lectus tincidunt. Duis est tortor, mattis non eleifend quis, viverra
          elementum velit. Nam egestas quis lacus vitae vulputate.</p>

        <p>Etiam auctor bibendum mollis. Donec congue dui sed commodo tempus.
          Vivamus tellus erat, maximus at nulla eget, imperdiet hendrerit ex.
          Praesent sodales arcu non ex egestas, ac consequat tortor vulputate.
          Fusce suscipit nibh nec libero venenatis, eget posuere dolor faucibus.
          Suspendisse dolor neque, pretium a libero eget, maximus porttitor est.
          Vivamus tellus odio, lobortis nec leo a, auctor convallis diam. Sed
          blandit in est ut laoreet.</p>

        <p>Cras diam tortor, dapibus sit amet lorem a, hendrerit luctus dui.
          Fusce in libero ipsum. Duis ut dapibus eros. Vivamus eleifend diam sed
          lectus pharetra, bibendum porta orci luctus. Fusce accumsan id quam
          quis suscipit. Praesent quis justo nec risus pharetra egestas eget sit
          amet arcu. Nulla facilisi. Sed vitae ex condimentum, scelerisque dolor
          quis, sollicitudin tellus. Nam imperdiet dapibus laoreet. Duis
          malesuada a sem at rhoncus.</p>

        <p>Nam vehicula eros id lacus varius mollis vitae ac sapien. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Maecenas hendrerit luctus nibh, ut condimentum ipsum fermentum
          ut. Nunc bibendum sed massa id accumsan. Praesent orci metus, aliquet
          nec rutrum quis, egestas quis lorem. Integer ac diam eu diam malesuada
          dignissim. In viverra nisl ut ipsum cursus, id accumsan libero mattis.
          Nunc a vulputate erat, ut rutrum felis. Sed bibendum elit sit amet
          pretium rutrum. Phasellus pretium quis erat a rhoncus. Aliquam
          volutpat ut lectus sit amet gravida. Suspendisse lacinia lobortis
          pellentesque.</p>

      </>
    )
  }
}
