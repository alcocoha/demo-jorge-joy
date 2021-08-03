import { useEffect } from 'react'
import './styles.scss'

export default function Legals() {
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: - 90 })
  }, [])
  return (
    <div className="legals-container">
      <h1 className="legals-container__h1">Terminos y condiciones</h1>
      <div className="legals-container__p">
        <p>
          Comercializadora PepsiCo México, S. de R.L. de C.V., con domicilio en Bosque de Duraznos No. 67, piso 10,
          Colonia Bosques de las Lomas, Alcaldía Miguel Hidalgo, Código Postal 11700, en la Ciudad de México (en
          adelante “CPM), pone a disposición del público en general los siguientes Términos y Condiciones para el uso de
          la JOY APP (en adelante “la Aplicación”).
        </p>
        <p>
          Los Usuarios de la Aplicación deberán de cumplir en todo momento con los presentes Términos y Condiciones para
          hacer uso de la Aplicación, participar en las Promociones y beneficios relacionados con el uso de la misma y,
          en su caso, ser acreedores de alguno de los incentivos dentro del Programa. Al utilizar la Aplicación los
          Usuarios aceptan dar cumplimiento a las reglas y decisiones de CPM, las cuales tendrán carácter definitivo y
          vinculante.
        </p>
        <p>I. Aceptación de los términos y condiciones.</p>
        <p>
          Al registrarse en la Aplicación, usted se obliga a observar los presentes Términos y Condiciones y autoriza a
          CPM para que esta utilice su información para los fines contemplados en nuestro Aviso de Privacidad y de
          acuerdo con las condiciones previstas en este DOCUMENTO. Para más información sobre el tratamiento que CPM
          llevará a cabo sobre sus datos personales ponemos a su disposición nuestro Aviso de Privacidad en la APP JOY y
          en los sitios web:{' '}
          <a href="https://joyapp.mx/" target="_blank">
            joyapp.mx
          </a>
          / y{' '}
          <a href="https://sabritas.com.mx/" target="_blank">
            sabritas.com.mx
          </a>
        </p>
        <p>
          Por lo anterior le recomendamos que, de manera previa a utilizar nuestros Servicios, lea cuidadosamente los
          presentes Términos y Condiciones, así como nuestro Aviso de Privacidad, ya que los mismos pueden ser
          actualizados y/o modificados por CPM en cualquier momento. En caso de no estar de acuerdo con los presentes
          Términos y Condiciones no podrá hacer uso de la Aplicación, participar en Promociones o ser acreedor de los
          beneficios del Programa, por lo que, deberá abstenerse de usar la Aplicación y los sitios web{' '}
          <a href="https://joyapp.mx/" target="_blank">
            joyapp.mx
          </a>
          / y{' '}
          <a href="https://sabritas.com.mx/" target="_blank">
            sabritas.com.mx
          </a>
        </p>
        <p>
          Los presentes Términos y Condiciones son aplicables con independencia del tipo de dispositivo utilizado para
          usar los Servicios.
        </p>
        <p>II. Definiciones</p>
        <p>
          Aviso de Privacidad: Es el documento físico, electrónico o en cualquier otro formato generado por CPM y que es
          puesto a disposición de la persona a la que corresponden los datos personales, previo al tratamiento de sus
          datos personales.
        </p>
        <p>Aplicación: Aplicación móvil JOY APP (disponible en Google Playstore y Appstore).</p>
        <p>Catálogo: lista de incentivos y/o recompensas ofrecidos por CPM.</p>
        <p>Cuenta de Usuario: acceso personalísimo y único de los consumidores participantes en la Aplicación.</p>
        <p>
          Descalificación: Se entenderá por DESCALIFICADO al usuario al que no se entregará ningún incentivo y no podrá
          seguir participando, se cancelará la Cuenta de Usuario, se bloqueará el acceso a la aplicación y se perderán
          el número de puntos acumulados. Adicional, si se detectara que un Usuario descalificado ingresa con otra
          Cuenta Usuario a la Aplicación, esta última también será cancelada.
        </p>
        <p>
          Incentivos: recompensas o beneficios ofrecidas por CPM dentro de la aplicación y que los participantes podrán
          adquirir a través del canje de sus puntos acumulados.
        </p>
        <p>
          Información PepsiCo: toda información relacionada con productos, promociones, puntos, El Programa, campañas
          publicitarias, noticias y otras análogas que ejecute CPM.
        </p>
        <p>Infracción: incumplimiento a los presentes términos y condiciones y/o a las promociones.</p>
        <p>
          Invitado: persona que ingresa a la Aplicación sin contar con una Cuenta de Usuario. Los servicios en esta
          modalidad están limitados a la pura visualización de contenidos.
        </p>
        <p>LFPDPPP: Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</p>
        <p>
          Notificaciones push: ventanas de notificación emergentes para comunicar al consumidor alguna información
          PepsiCo dentro de la Aplicación.
        </p>
        <p>
          Perfil: sección dentro de la aplicación donde los consumidores podrán encontrar su saldo en puntos, incentivos
          verificados y en validación, así como proporcionar su información complementaria.
        </p>
        <p>
          Permisos de uso: las autorizaciones concedidas por el usuario en relación con el acceso a funciones de cámara,
          ubicación y archivos dentro de la Aplicación. El usuario podrá desactivar estos permisos en cualquier momento,
          sin embargo, ciertas funciones podrían verse limitadas y/o afectar la experienca de navegación o uso de la
          Aplicación. Estos son información técnica del dispositivo que usted emplee para acceder a la Aplicación,
          incluyendo datos relativos a las características del equipo, localización geográfica del dispositivo e
          información que se genere a partir del uso de la Aplicación tal y como se establece en el Aviso de Privacidad
          disponible en la Aplicación.
        </p>
        <p>
          Promociones: mecánicas adicionales al funcionamiento regular del Programa, estas contarán con términos y
          condiciones independientes.
        </p>
        <p>
          Programa: Programa de Recompensas, es el Programa de incentivos organizado por CPM. En este programa los
          consumidores participantes podrán acumular puntos e intercambiarlos por incentivos.
        </p>
        <p>
          Servicios: se entiende como todo el flujo de interacciones posibles dentro de la Aplicación y que son
          proporcionados por CPM, los cuales incluyen, sin limitar: acceso, funcionamiento, acumulación de puntos,
          registro, canje, publicidad, notificaciones, entre otras funcionalidades que ofrezca la Aplicación y/o el
          Sitio Web.
        </p>
        <p>
          Sitio Web: El sitio web de la aplicación{' '}
          <a href="https://joyapp.mx/" target="_blank">
            joyapp.mx
          </a>
        </p>
        <p>
          Usuario: La persona que se registra como usuario de la Aplicación y hace uso de los Servicios de la misma.
          Asimismo, se considerará Usuario a la persona que se participe en alguna de las Promociones del Programa de
          acuerdo con las condiciones establecidas en estos Términos y Condiciones. De acuerdo con lo dispuesto por la
          Ley Federal de Protección al Consumidor se entenderá como Usuario al Consumidor que adquiere, realiza o
          disfruta como destinatario final bienes, productos o servicios ofrecidos por CPM.
        </p>
        <p>Verificación: forma de autenticación de perfiles de consumidores por parte de CPM.</p>
        <p>
          Términos y Condiciones: Se refiere a los presentes Términos y Condiciones que rigen el uso de la Aplicación,
          las funciones, beneficios y Servicios inherentes a la misma, así como las condiciones a las que se sujetará el
          Programa y las Promociones.
        </p>
        <p>III. Uso de la Aplicación</p>
        <p>Al usar la Aplicación, usted acepta que:</p>
        <div className="p-tab">
          <p>
            A. Es mayor de edad en la República Mexicana, es decir, tiene 18 años cumplidos al momento de su registro en
            la Aplicación y cuenta con capacidad para obligarse legalmente;
          </p>
          <p>
            B. Observará los presentes Términos y Condiciones así como las obligaciones que resulten aplicables de
            acuerdo con la normatividad vigente al momento de su participación en las Promociones y registro en el
            Programa.
          </p>
          <p>
            C. No utilizará la Aplicación de ninguna manera que pueda conducir al fomento, obtención o realización de
            ninguna actividad ilícita, criminal, fraudulenta, ilegal o prohibida por estos Términos y Condiciones o por
            la normatividad vigente;
          </p>
          <p>
            D. No la utilizará la Aplicación para ningún otro propósito que no sea su uso personal y/o participar en el
            Programa y las Promociones;
          </p>
          <p>
            E. Mantendrá la seguridad y confidencialidad de su nombre de usuario y contraseña para el uso de la
            Aplicación;
          </p>
          <p>
            F. No anunciará ni promocionará productos o servicios propios o de terceros, inclusive mediante la
            distribución de correo electrónico "spam";
          </p>
          <p>
            G. No transferirá archivos que contengan virus, troyanos o que realicen cualquier otra actividad perjudicial
            para la Aplicación;
          </p>
          <p>
            H. No incluirá enlaces a la Aplicación desde un sitio de terceros sin nuestra autorización previa por
            escrito;
          </p>
          <p>
            I. No vulnerará la seguridad de la Aplicación ni intentará realizar acciones que impliquen una posible
            vulneración a cuentas de usuarios vinculadas o asociadas con la Aplicación;
          </p>
          <p>
            J. No incurrirá en cualquier conducta o acción ilícita durante el uso de la Aplicación, ni interferirá con
            el acceso, uso o disfrute por parte de otra persona. En caso de incumplimiento de las referidas obligaciones
            y en caso de incumplimiento en cualquier otra obligación del Usuario establecida en los presentes Términos y
            Condiciones y en las leyes aplicables a los presentes Términos y Condiciones, tendremos derecho a cancelar
            los Servicios, sin previo aviso y/o a cancelar la cuenta del Usuario de manera inmediata, sin necesidad de
            declaración judicial ni de notificación previa alguna al Usuario;
          </p>
          <p>
            K. No infringirá los derechos de propiedad intelectual de los propietarios de la Aplicación o de terceras
            personas; y
          </p>
          <p>L. No interferirá con el acceso, uso o disfrute de la Aplicación por parte de otra persona.</p>
        </div>
        <p>IV. Obligaciones del Usuario.</p>
        <p>Usted acepta que al ingresar a la Aplicación tendrá las siguientes obligaciones:</p>
        <div className="p-tab">
          <p>
            A. Registrarse dentro de la Aplicación garantizando la calidad de la información proporcionada y que tiene
            la titularidad de la misma. Es obligación del Usuario brindar información correcta y actualizada, así como
            llevar a cabo las gestiones necesarias para mantener la misma exacta, correcta y actualizada;
          </p>
          <p>
            B. Observar el contenido de los presentes Términos y Condiciones para participar en Promociones relacionadas
            con el Programa;
          </p>
          <p>
            C. Establecer una contraseña adecuada compuesta de un mínimo de 6 caracteres incluyendo una mayúscula y
            número alfanumérico, el usuario podrá alternar el uso entre números alfanuméricos y mayúsculas;
          </p>
          <p>
            D. No compartir con ningún tercero las credenciales de acceso a la Aplicación. Cualquier acción realizada
            con las credenciales del Usuario se entenderá realizada por este y será de su exclusiva responsabilidad;
          </p>
          <p>
            E. No comercializar o lucrar con los incentivos obtenidos con motivo de su participación en Promociones y el
            Programa.
          </p>
          <p>
            F. Mantener la seguridad y confidencialidad de tu nombre de usuario y contraseña para acceder a la
            Aplicación y los Servicios de la misma;
          </p>
          <p>
            G. No incurrir en cualquier conducta o acción ilícita durante el uso de la Aplicación, ni interferirá con el
            acceso, uso o disfrute por parte de otra persona. En caso de incumplimiento de las referidas obligaciones y
            en caso de incumplimiento en cualquier otra obligación del Usuario establecida en los presentes Términos y
            Condiciones y en las leyes aplicables a los presente Términos y Condiciones, tendremos derecho a cancelar
            los Servicios, sin previo aviso y/o a su registro en la Aplicación de manera inmediata, sin necesidad de
            declaración judicial ni de notificación previa alguna al Usuario.
          </p>
          <p>H. No infringir los derechos de propiedad intelectual de la Aplicación; o</p>
          <p>I. No interferir en el acceso, uso o disfrute de la Aplicación por parte de otra persona.</p>
        </div>
        <p>V. Derechos del Usuario.</p>
        <p>
          De acuerdo con lo dispuesto por la Ley Federal de Protección al Consumidor y demás normatividad aplicable
          usted tendrá los siguientes derechos cuando haga uso de nuestros Servicios:
        </p>
        <div className="p-tab">
          <p>
            A. Conocer la identidad y datos de contacto de CPM para solicitar aclaraciones o presentar reclamaciones. Le
            recomendamos consultar el preámbulo de estos Términos y Condiciones para localizar tal información;
          </p>
          <p>
            B. Conocer toda la información sobre los términos, condiciones y servicios ofrecidos por CPM. Le
            recomendamos leer con detenimiento el contenido de estos Términos y Condiciones para hacer uso de la
            Aplicación y los Servicios que esta ofrece;
          </p>
          <p>
            C. Recibir información oportuna, completa, clara y veraz en relación con la publicidad y alcance los
            Servicios de CPM;
          </p>
          <p>D. Elegir de forma libre la participación en los Servicios;</p>
          <p>E. Que los Servicios que le ofrecemos sean prestados en condiciones de calidad y seguridad;</p>
          <p>
            F. No ser discriminado por razón de sexo, raza, religión, condición económica, nacionalidad, orientación
            sexual, por tener alguna discapacidad o cualquier motivo similar;
          </p>
          <p>
            G. Derecho a ser compensado o bonificado en los supuestos que resulte procedente de acuerdo con lo previsto
            por la normatividad aplicable;
          </p>
          <p>
            H. Que sus datos personales sean tratados de forma confidencial. Para conocer las condiciones a las que se
            sujetará el tratamiento de sus datos personales puede consultar nuestro Aviso de Privacidad [indicar
            enlace]; y
          </p>
          <p>
            I. Acudir a la Procuraduría Federal de Protección al Consumidor o cualquier otra instancia competente para
            la defensa de tus derechos cuando resulte procedente.
          </p>
          <p>
            J. Reestablecer su contraseña con el código de restauración de contraseña enviado al correo electrónico con
            el que se registró de forma previa como Usuario de la Aplicación.
          </p>
        </div>

        <p>VI. Información importante de los Servicios</p>
        <p>
          Los Servicios que prestamos a través de la Aplicación de ninguna manera constituyen una oferta de compra o
          venta de productos y/o servicios en ninguna jurisdicción, ya que la Aplicación se ofrece únicamente con fines
          informativos y de obtención de incentivos a través de la redención de puntos. Todos los detalles,
          descripciones y valor en puntos, así como cualquier otra información relacionada con los Incentivos y/o
          Servicios que aparecen en la Aplicación son de carácter general únicamente. Los Incentivos que aparezcan en la
          Aplicación podrán variar de disponibilidad favor de consultar el Catálogo de Incentivos.
        </p>
        <p>VII. JOY APP Programa de Recompensas</p>
        <p>1. Vigencia del Programa: el Programa estará vigente del 19 de abril de 2021 al 18 de abril de 2022.</p>
        <p>
          2. Personas participantes: únicamente podrán participar personas físicas mayores de edad que residan en el
          territorio nacional y que hayan creado una Cuenta de Usuario en la Aplicación.
        </p>
        <p>
          No son elegibles para ser participar los empleados y/o socios de Comercializadora PepsiCo México, S. de R.L.
          de C.V., incluyendo sus controladoras, filiales y/o subsidiaras, sucursales, incluyendo sin limitar, CPM
          Internacional México S. de R.L. de C.V., Gamesa, S. de R.L. de C.V., Grupo Sabritas, S. de R.L. de C.V., CPM
          de México S. de R.L. de C.V. (que en lo sucesivo será denominado como “CPM”), así como los miembros de su
          familia, incluyendo en forma descriptiva mas no limitativa, al cónyuge, a los padres, hermanos y a los hijos.
        </p>
        <p>3. Funcionamiento del Programa:</p>
        <div className="p-tab">
          <p>
            A) Del registro y creación del perfil. Los interesados deberán descargar la Aplicación (disponible para su
            descarga en Google Playstore y Appstore) y deberán registrarse mediante alguna de las siguientes opciones:
          </p>
          <div className="p-tab-second">
            <p>1. Cuenta de correo;</p>
            <p>2. Cuenta de Google;</p>
            <p>3. Cuenta de iOS; o</p>
            <p>4. Cuenta de Facebook</p>
          </div>
          <p>
            Una vez hecho lo anterior, deberán de leer y aceptar: Términos y Condiciones, Aviso de Privacidad y las
            presentes bases de participación del programa y conceder a la Aplicación los Permisos de uso necesarios para
            el funcionamiento de la misma. No conceder los Permisos de Uso podrá afectar su experiencia de uso con la
            Aplicación y/o impedir el acceso a determinadas funciones y herramientas de la Aplicación. A partir de este
            momento se considerará que la cuenta de usuario ha sido creada y en consecencia, el Usuario acepta los
            Términos y Condiciones de la misma y se obliga de conformidad con estos últimos.
          </p>
          <p>
            Después de crear la cuenta, se les solicitará a los Usuarios que completen su perfil con sus datos, que
            deberán ser los del titular. A partir de este momento, los interesados podrán navegar dentro de la
            Aplicación.
          </p>
          <p>B) De la acumulación de puntos.</p>
          <p>
            Los participantes en el Programa podrán acumular puntos para canjearlos por alguno de los incentivos
            ofrecidos dentro del catálogo de la Aplicación.
          </p>
          <p>Las formas en la que los Usuarios podrán acumular puntos serán las siguientes:</p>
          <div className="p-tab-second">
            <p>
              5. A través del registro de códigos alfanuméricos en tiras, impresos o en volantes que podrán encontrarse
              al interior de los productos que comercialice CPM en la República Mexicana y que los códigos especifiquen
              que son para acumular dentro de la Aplicación. La disponibilidad de estos códigos será limitada a lo largo
              de la vigencia del Programa.
            </p>
            <p>
              6. Participación en promociones especiales que podrán incluir sin limitar: registro de códigos, registro
              de comprobantes de compra u otros, participación en concursos de habilidad y destreza y cualquier otra
              Promoción que en sus propios Términos y Condiciones señalen específicamente que la participación en la
              misma genera puntos dentro de esta aplicación. Dichas Promociones estarán identificadas de manera
              independiente dentro de la Aplicación, tendrán términos y condiciones, formas de participación,
              limitaciones y restricciones e incentivos propios.
            </p>
            <p>
              7. Interacciones especiales dentro de la Aplicación, que podrán ser (sin limitar): registro, inicio de
              sesión continuo por 7 días, participación en encuestas, juegos de destreza, entre otros.
            </p>
          </div>
          <p>
            Al momento de comunicarse en la Aplicación estas interacciones se hará del conocimiento de los Usuarios el
            valor en puntos de la actividad; adicional, algunas interacciones estarán limitadas exclusivamente a los
            Usuarios que se les comunique.
          </p>
          <p>
            Dentro de las interacciones especiales CPM podrá otorgar al Usuario beneficios adicionales cuyas limitantes
            y restricciones serán informadas al Usuario a través de notificaciones push dentro de la Aplicación.
          </p>
          <p>
            Las interacciones especiales podrán ser modificadas a criterio de CPM sin previo aviso y sin responsabilidad
            alguna para CPM.
          </p>
          <p>
            C) Redención de puntos Una vez que los Usuarios acumulen los puntos suficientes para canjearlos por alguno
            de los incentivos disponibles en el catálogo del Programa, podrán redimirlos si estos se encuentran
            disponibles.
          </p>
          <p>
            Al momento de realizar el canje, se restarán los puntos del valor del incentivo de su perfil y se procederá
            a validar la cuenta de usuario.
          </p>
        </div>
        <p>
          4. De los Incentivos: Dentro de la aplicación existirá un catálogo de incentivos que CPM pondrá a disposición
          de los Usuarios, cada Incentivo tendrá un valor en puntos que establecerá el organizador.
        </p>
        <p>
          Los Incentivos estarán limitados a un total de 6,000 (seis mil). Estos se distribuirán proporcionalmente de
          manera diaria durante la vigencia del Programa. El otorgamiento de los Incentivos está sujeto a la
          disponibilidad de los mismos, por lo que CPM no se obliga a garantizar de forma incondicional la entrega, uso,
          goce o disfrute de los mismos.
        </p>
        <p>
          En caso de que no se rediman todos los incentivos de algún día de dispersión, los remanentes serán acumulados
          al inmediato posterior. Además, en caso de que los Incentivos se agoten en un día, deberán de esperar al
          inmediato siguiente.
        </p>
        <p>
          El primer lunes de cada mes durante la vigencia del programa, el Catálogo de Incentivos podrá ser actualizado
          sin afectar el total de incentivos antes determinado. Es obligación de los participantes en el Programa
          consultar el Catálogo de Incentivos para verificar que la existencia del Incentivo correspondiente.
        </p>
        <p>
          Las imágenes y marcas que aparezcan en el Catálogo de Incentivos serán únicamente para fines ilustrativos por
          lo que en ningún momento CPM está obligado a entregar de conformidad con las imágenes del Catálogo de
          Incentivos.
        </p>
        <p>
          5. Características de los puntos: los Usuarios podrán acumular puntos de conformidad con la participación en
          el Programa, Promociones y/o interacciones, estos podrán ser utilizados para canjearse por los incentivos
          dentro del Catálogo de Incentivos o durante la vigencia de los periodos promocionales.
        </p>
        <p>
          Los puntos tendrán una validez de un año contado a partir de que fueron acumulados dentro de la Aplicación.
        </p>
        <p>
          Así mismo, los puntos son para uso exclusivo dentro de la Aplicación y, en específico, dentro del Programa o
          Promociones donde se declare. Los puntos en ningún momento serán intercambiables por dinero en efectivo o
          cualquier otro bien, ni tienen equivalencia monetaria.
        </p>
        <p>6. Restricciones del Programa:</p>
        <div className="p-tab">
          <p>
            1. Los materiales con códigos que los interesados hayan registrado para acumular puntos deberán de haber
            sido obtenidos de manera lícita a través de la compra de productos participantes del Programa. En caso de
            que CPM encuentre irregularidades en la obtención de algún material, este se reserva el derecho de cancelar
            los códigos de los cuales se tenga conocimiento de esta situación.
          </p>
          <p>
            2. El Usuario entiende y acepta que está prohibido violar o intentar violar, de cualquier forma, la
            seguridad de las tiras y cupones, incluyendo de manera enunciativa y no limitativa, falsificar o realizar
            una copia de éstos. Dicha conducta podrá dar lugar a la descalificación del Usuario así como a la
            interposición de las acciones y medios de legal que correspondan de acuerdo con los inereses de CPM.
          </p>
          <p>
            3. CPM se reserva ampliamente el derecho de descalificar a cualquier Usuario del cual se tenga duda o
            sospecha que se encuentra interviniendo las tiras o cupones, o que esté actuando en contra de las reglas
            oficiales.
          </p>
          <p>
            4. Las tiras internas deberán presentar marcas de haber sido desprendidas directamente de los empaques pues
            CPM se reserva el derecho de solicitar a los acreedores la presentación de las tiras, por lo que las mismas
            deberán ser debidamente resguardarlas y conservadas.
          </p>
          <p>
            5. Adicionalmente, los Usuario deberán de conservar los empaques de donde obtuvieron las tiras internas,
            pues CPM se reserva el derecho de solicitarlos en caso de ser necesario.
          </p>
          <p>
            6. Los Usuarios participantes deberán guardar las tiras con los códigos que hayan ingresado pues podrán ser
            solicitados para validar su participación y, en su caso, hacer la entrega del incentivo.
          </p>
          <p>
            7. CPM se reserva el derecho de ejercer las acciones que correspondan en la vía judicial, incluyendo de
            manera enunciativa mas no limitativa, ante las autoridades civiles, penales y/o administrativas contra
            cualquier Usuario del que se tenga sospecha que se encuentra interviniendo de cualquier manera el correcto
            funcionamiento de la Aplicación y/o el Sitio Web.
          </p>
          <p>
            8. En caso de ser solicitado, el Usuario que resulte acreedor de algún incentivo, otorga una licencia amplia
            para el uso de su nombre, imagen y/o voz para la elaboración de material fotográfico a través de distintos
            formatos físicos y/o electrónicos que CPM determine, así como grabaciones de audio y video a utilizarse o
            publicarse en los medios de comunicación que CPM juzgue convenientes sin remuneración adicional alguna
            distinta a la del Incentivo recibido de acuerdo con lo establecido en las presentes bases. Al facilitar o
            cargar determinados contenidos en la Aplicación y/o el Sitio Web el Usuario autoriza de forma expresa a CPM
            para hacer uso de los mismos de acuerdo con las condiciones previamente señaladas.
          </p>
          <p>
            9. La participación en el Programa, así como el uso de la Aplicación implica la aceptación de la totalidad
            de sus bases, las que son inapelables; CPM es la única habilitada para interpretarlas y tomar decisiones
            inapelables sobre el programa.
          </p>
          <p>
            10. El Programa está diseñado para personas físicas mayores de edad, por lo que en caso de que se detecte a
            algún Usuario menor de edad, será descalificado y no se entregará incentivo alguno sin responsabilidad para
            CPM.
          </p>
          <p>11. Sobre la participación</p>
          <p>
            De conformidad con lo establecido en el funcionamiento del Programa existirán las siguientes limitantes de
            acumulación de puntos:
          </p>
          <div className="p-tab-second">
            <p>
              1. Por lo que hace a los códigos exclusivos para la Aplicación y que no pertenezcan a una promoción
              especial, los interesados podrán registrar hasta 10 (diez) códigos alfanuméricos por día.
            </p>
            <p>2. Para las Promociones especiales, las restricciones se establecerán en sus propias bases.</p>
            <p>
              3. Las interacciones serán eventuales y en el momento que CPM les avise a los participantes, estas solo
              otorgan los puntos 1 (una) sola vez.
            </p>
          </div>
          <p>
            12. CPM no será responsable en caso de que algún Usuario y/o consumidor sufra intermitencias o abandone la
            Aplicación. Si el organizador recibiera un reporte de esta situación se investigará y, en su caso, se podrá
            reactivar el código si es que aplica, pero no se abonarán puntos ni participaciones de manera retroactiva.
          </p>
          <p>
            13. CPM; sus subsidiarias y/o afiliadas no aceptan ninguna responsabilidad por cualquier falla técnica o un
            funcionamiento defectuoso o cualquier otro problema con la red que esté conectado en línea al sistema,
            servidores, o proveedores de otro tipo, que puede ser el resultado de cualquier contenido o entrada en la
            promoción que no esté correctamente registrado.
          </p>
          <p>
            14. CPM no se hace cargo de los gastos que generen, suministro de energía eléctrica, servicio de
            telecomunicaciones, programas y software y hardware, reproductores musicales, ni recomienda o promueve marca
            alguna de insumos tecnológicos y cualquier otro requisito de participación.
          </p>
          <p>
            15. Se investigarán todas las participaciones en las que se tenga sospecha que un Usuario esté alterando el
            funcionamiento de la Aplicación.
          </p>
          <p>16. Sobre el registro</p>
          <p>
            Solamente podrán ser acreedores de la Promoción los Usuarios con un perfil válido y debidamente verificado
            por CPM dentro de la Aplicación, de conformidad con lo establecido en el presente documento. Entiéndase por
            perfil válido aquel que ha completado su registro exitosamente. Si CPM no contara con la información para
            validar el perfil de un usuario, este no podrá ser acreedor a ningún Incentivo.
          </p>
          <p>
            17. Solamente se permitirá que máximo dos Usuarios registren el mismo domicilio para participar en el
            Programa.
          </p>
          <p>
            18. Los datos que proporcionen los Usuarios se considerarán como adecuados, correctos y actualizados, por lo
            que, estos responderán por la calidad y veracidad de los mismos. Los Usuarios entienden y aceptan que es su
            responsabilidad proporcionar todos los datos completos, correctos y actualizados.
          </p>
          <p>
            19. Los Usuarios participantes entienden y aceptan que está prohibido violar o intentar violar, de cualquier
            forma, el Programa, incluyendo de manera enunciativa más no limitativa, proporcionar datos incompletos o
            falsos, o intentar interferir con el Servicio a cualquier Usuario.
          </p>
          <p>
            20. Los participantes podrán conocer la cantidad de puntos que llevan acumulados (tanto por registrar
            códigos como por participar en dinámicas adicionales) en su perfil dentro de la Aplicación.
          </p>
          <p>
            21. En caso de ser necesario, CPM podrá solicitar a los Usuarios documentos adicionales (como pueden ser
            comprobante de domicilio o identificación oficial) para validar su registro de conformidad con los presentes
            términos y condiciones. Los documentos deberán de cargarse en un formato legible y de fácil lectura en el
            formato que se solicite por CPM. No se aceptarán fotocopias.
          </p>
          <p>
            22. Si derivado del punto anterior el Usuario no proporcionase una identificación oficial válida (legible y
            vigente) se hará de su conocimiento, no podrá ser acreedor a ningún incentivo (que así lo requiera) hasta
            que cuente con el documento señalado. En caso de haber realizado un canje de puntos, se le reintegrarán a su
            Perfil.
          </p>
          <p>23. Sobre los participantes</p>
          <p>
            Aquellos Usuarios que compartan por cualquier medio (ya sea de participación o redes sociales de la marca)
            cualquier tipo de contenido sensible, entiéndase por lo anterior aquel contenido que incluya palabras y/o
            fotografías que muestren y/o inciten a actos de violencia, sexo, consumo de sustancias (drogas), alcohol o
            tabaco, que promuevan actos ofensivos, faltos de ética, ideologías políticas, sobreconsumo o sedentarismo, o
            que ridiculicen a personas por temas de raza, religión, sexo, aspecto físico, ideología, nacionalidad,
            religión, etc. serán bloqueados de la Aplicación y su participación no será considerada en la Promoción.
          </p>
          <p>
            24. En caso de que un Usuario ingrese a registrar sus datos o participar a través del perfil de otra
            persona, éste será descalificado.
          </p>
          <p>
            25. Cada participación será considerada a través de un solo perfil, que será aquel con el que hayan
            registrado el primer código; en caso de que CPM detecte que un usuario participa con 2 o más cuentas será
            descalificado en ambas cuentas y no podrá seguir participando el Programa, ni se hará entrega de Incentivos
            de ningún tipo.
          </p>
          <p>
            26. CPM y sus filiales se reservan el derecho de limitar o prohibir la participación en este Programa y en
            cualquier otra promoción a cualquier persona, en el caso de presumir la existencia de fraude o alteración en
            la mecánica de funcionamiento de la Promoción, y/o de los productos y/o del sitio de CPM, o si el
            participante no cumple totalmente con los requisitos de participación establecidos en las presentes bases.
          </p>
          <p>
            Advertencia: Cualquier intento, hecho por cualquier persona, de dañar, alterar deliberadamente la
            Aplicación, servicio telefónico relacionado con este programa o alterar la legítima operación del mismo,
            constituye una violación a las leyes de carácter civil y penal; razón por la cual, en caso de presentarse
            dicho intento, CPM; sus subsidiarias y/o afiliadas, se reservan el derecho de reclamar indemnización por
            daños y perjuicios frente a cualquier persona, ante las autoridades asó como a interponer las acciones
            legales que juzgue convenientes para la defensa de sus derechos e intereses.
          </p>
          <p>
            27. CPM se reserva el derecho a descalificar del Programa a cualquier persona que ponga en riesgo la
            integridad y buen desarrollo de la Aplicación, el Sitio Web, las Promociones y/o el Programa, tal es el caso
            de aquellos denominados “hackers” (término utilizado para referirse a personas con grandes conocimientos en
            informática y telecomunicaciones que son empleados con objetivos personales y/o de lucro, el cual puede ser
            doloso e ilegal) o los denominados “caza promociones” (definido como tal a todo aquel participante que actúa
            solo o conjuntamente con recursos económicos, materiales o informativos de forma desleal frente a los otros
            participantes para obtener el beneficio de la promoción sin importar que los mecanismos que usa sean poco
            ortodoxos, éticos, morales o incluso ilegales).
          </p>
          <p>
            28. Una vez que CPM determinó a los acreedores de los Incentivos, no se resolverán incidencias de manera
            retroactiva. En caso de existir una incidencia, CPM podrá ejercer las acciones necesarias para garantizar la
            igualdad de condiciones entre los participantes.
          </p>
          <p>29. Sobre los incentivos</p>
          <p>
            Los Incentivos del Programa no son acumulables, transferibles ni canjeables por dinero en efectivo, ni por
            cualquier otro incentivo en especie.
          </p>
          <p>
            30. Cada participante podrá únicamente redimir un Incentivo de cada tipo por mes (calendario) de vigencia
            del programa.
          </p>
          <p>
            31. Los Usuarios entienden y aceptan que los incentivos tienen características distintas para su entrega que
            podrán ser: físicos, digitales, por medio de códigos, folios, entre otros. La responsabilidad de CPM acaba
            una vez que ha entregado los Incentivos. A partir de que se considere como entregado, los interesados serán
            los únicos responsables de hacer los canjes o darle seguimiento en los tiempos y formas establecidos en este
            documento.
          </p>
          <p>
            32. En caso de que alguno de los Incentivos presente un defecto de fábrica, el Usuario tendrá 5 días hábiles
            contados a partir de la recepción del incentivo para hacerlo del conocimiento de CPM y este validará si
            procede un canje. Lo anterior siempre y cuando el acreedor no haya hecho uso del incentivo.
          </p>
          <p>
            Importante: Para efectos de lo establecido en el punto anterior, el Usuario deberá acompañar la incidencia
            con evidencia para su validación. Así mismo, se tomarán como entregados los incentivos electrónicos (tales
            como folios, códigos, tarjetas de regalo, monederos, o cualesquiera otros de la misma índole) cuando sea
            enviado el correo a la dirección electrónica registrada en la Aplicación.
          </p>
          <p>
            33. Los Incentivos son personalísimos y no podrán ser transferidos a ningún tercero, por lo que, los
            acreedores entienden y aceptan que es su responsabilidad recibir personalmente el incentivo. En caso de que
            una persona ajena, previamente autorizada por el Usuario, lo reciba, CPM no será responsable de las
            consecuencias que de ello se deriven.
          </p>
          <p>
            34. Los Incentivos que sean entregados en folios o códigos tendrán una vigencia definida en el correo que
            las acompañe, si los Usuarios no redimen (o en su caso, reportan una incidencia) dentro de este periodo, se
            entenderá que los acreedores renunciaron a su derecho al incentivo sin responsabilidad para CPM.
          </p>
          <p>
            35. En la descripción de los incentivos se incluirán las consideraciones adicionales para su entrega o
            canje.
          </p>
          <p>
            36. Una vez que un Usuario es considerado como acreedor de un incentivo físico, se hará el envió al
            domicilio registrado a través de una agencia de envíos, la cual, hará hasta tres intentos de entrega del
            incentivo. En caso de que no se pueda realizar la entrega en estos 3 intentos, el Usuario deberá de darle
            seguimiento a través del número de atención o el correo del programa. Se considerarán que empiezan a correr
            los plazos de la Ley Federal de Protección al Consumidor a partir del 3er (tercer) intento de entrega en el
            domicilio registrado.
          </p>
          <p>
            37. Importante: Si por causas ajenas al Organizador se suspendiera, modificara, alterara o de cualquier
            forma se vieran imposibilitados los acreedores para disfrutar del Incentivo o de la actividad programada, el
            Organizador se reserva el derecho de otorgar opcionalmente algún incentivo igual o similar al incentivo que
            el participante se hizo acreedor.
          </p>
        </div>
        <p>
          7. Asignación de incentivos: Los Usuarios participantes deberán acumular la cantidad de puntos necesarios para
          poder canjear por alguno de los incentivos disponibles. Una vez que hayan realizado el canje tendrá calidad de
          “posible acreedor”, se restarán los puntos de su perfil y CPM validará el cumplimiento de los presentes
          Términos y Condiciones.
        </p>
        <p>
          Cuando se haya validado la calidad de acreedor de un Usuario, será notificado en la Aplicación en un plazo no
          mayor a 20 días hábiles.
        </p>
        <p>
          Una vez determinado algún Usuario como posible acreedor, CPM podrá contactarlo para solicitarle documentos que
          serán indispensables para completar su registro, los consumidores tendrán hasta 72 horas contadas a partir del
          envío de este mensaje (correo electrónico) para compartir los datos correctos. En caso de no hacerlo, se les
          tendrá por renunciado su derecho al incentivo sin responsabilidad para el Organizador y se pasará al siguiente
          Usuario que cumpla con las condiciones de estas bases.
        </p>
        <p>
          8. Entrega de incentivos: Una vez que algún Usuario haya sido confirmado como acreedor, se enviará su
          incentivo y este lo recibirá en un plazo no mayor a 20 días hábiles posteriores a la confirmación.
        </p>
        <p>
          Importante: Derivado de la situación de contingencia de salud actual (COVID -19), es posible que existan
          retrasos por parte de los servicios de mensajería, de los cuales el organizador de la Promoción no es
          responsable de forma directa o indirecta. CPM procurará continuar con los envíos de la manera más puntual
          posible para la satisfacción de nuestros consumidores.
        </p>
        <p>VIII. Confidencialidad</p>
        <p>
          CPM tratará la información proporcionada por el Usuario con estricta confidencialidad y solo lo utilizará y
          divulgará de acuerdo con los presentes Términos y Condiciones. No obstante, la información proporcionada por
          el Usuario no se considerará información confidencial si:
        </p>
        <div className="p-tab">
          <p>
            A. Es o pasa a ser de dominio público (de un modo que no sea por incumplimiento de los presentes Términos y
            Condiciones por parte de CPM);
          </p>
          <p>B. CPM tenía conocimiento de dicha información legalmente antes de recibirlo de parte del Usuario;</p>
          <p>
            C. CPM lo recibe de un tercero sin conocimiento de incumplimiento de ningún compromiso con el Usuario, o
          </p>
          <p>
            D. La información fue desarrollada de forma independiente por CPM sin referencia a su información. CPM puede
            revelar tu Contenido cuando lo requiera la ley o un proceso legal, pero solamente después de que CPM, si la
            ley lo permite, haga todo lo razonablemente posible desde el punto de vista comercial para notificarle y
            otorgarle al Usuario la oportunidad de oponerse a la solicitud de divulgación.
          </p>
        </div>
        <p>
          CPM cuenta con las medidas de seguridad administrativas, físicas y técnicas para garantizar la seguridad de
          los datos e información proporcionada por el Usuario. CPM ha implementado diversas medidas de seguridad para
          proteger los datos proporcionados por el Usuario, en contra de accesos no autorizados por Usuarios de la
          Aplicación o visitantes del Sitio Web. Para garantizar la seguridad de su información CPM ha implementado un
          candado de seguridad SSL, el cual hace imposible que una persona ajena a la relación entre el Usuario y CPM,
          tenga acceso o adquiera los datos de manera ilegal.
        </p>
        <p>IX. Privacidad y Protección de Datos Personales.</p>
        <p>
          CPM sólo recaba información personal de los Usuarios cuando estos los proporcionan a través de la Aplicación
          y/o el Sitio Web.
        </p>
        <p>
          Para conocer las condiciones generales a las que se sujeta el tratamiento de tus datos personales, así como
          para ejercer los derechos que la normatividad prevé, le aconsejamos consultar nuestro Aviso de Privacidad
          mismo que se encuentra disponible en los sitios web:{' '}
          <a href="https://joyapp.mx/" target="_blank">
            joyapp.mx
          </a>
          / y{' '}
          <a href="https://sabritas.com.mx/" target="_blank">
            sabritas.com.mx
          </a>{' '}
          y cumple con los distintos elementos informativos previstos por la LFPDPPP y demás normatividad aplicable.
        </p>
        <p>
          Al proporcionar su información para hacer uso de la Aplicación, el Sitio Web y/o participar en Promociones del
          Programa usted acepta que CPM ha puesto a disposición su Aviso de Privacidad, y que, en consecuencia, le ha
          informado sobre las condiciones a las que se sujetará el Tratamiento de sus datos personales, según los
          requisitos establecidos por la LFPDPPP y demás normatividad aplicable.
        </p>
        <p>X. Marcas.</p>
        <p>
          Todas las marcas registradas utilizadas en la Aplicación y/o el Sitio Web son propiedad de PepsiCo, Inc., o
          bien cuenta con los permisos y/o licencias necesarias para el uso de los mismos. En virtud de ello, el Usuario
          acepta y reconoce que no está autorizado ni legitimado de forma alguna para utilizar ni explotar, de forma
          enunciativa mas no limitativa a las marcas comerciales, logos, diseños, imagen comercial y demás conceptos
          análogos, de PepsiCo, Inc., por lo que no podrá divulgar ni reproducir el contenido de la Aplicación ni podrá
          ser empleada para fines distintos a los permitidos en estos Términos y Condiciones y a los estrictamente
          relacionados con el fin de uso de la citada aplicación, aún y cuando sea sin fines de lucro.
        </p>
        <p>XI. Propiedad Intelectual.</p>
        <p>
          Los derechos de la propiedad intelectual respecto a los Servicios, los signos distintivos, su código fuente,
          así como los derechos de uso y explotación de los mismos, incluyendo su divulgación, publicación,
          reproducción, distribución y transformación, son propiedad exclusiva de PepsiCo, Inc. En virtud de lo anterior
          el Usuario reconoce que no podrá divulgar, publicar, reproducir, distribuir, transformar o disponer de ningún
          modo, el dominio propiedad de PepsiCo, Inc., ni de cualquier material que sea resultado de la Propiedad
          Intelectual de este último. Además, el Usuario reconoce que lo establecido en el párrafo inmediato anterior
          respecto a la titularidad de los derechos por parte de PepsiCo, Inc., serán aplicables a los derechos de
          terceros respecto al contenido o información presentada o vinculada a la Aplicación.
        </p>
        <p>XII. Suspensión y cancelación de los Servicios.</p>
        <p>El Usuario puede solicitar la cancelación de su Cuenta de Usuario.</p>
        <p>
          Asimismo, CPM puede cancelar los Servicios y/o Cuentas de Usuario por cualquier razón notificando al Usuario
          por escrito. CPM puede suspender la prestación de sus Servicios por cualquiera de las siguientes razones:
        </p>
        <div className="p-tab">
          <p>
            A. Si el Usuario incumple de forma sustancial los presentes Términos y no subsana ese incumplimiento en los
            30 días posteriores a que CPM se lo haya notificado por escrito;
          </p>
          <p>
            B. Si el Usuario interrumpe sus operaciones comerciales o está sujeto a procedimientos de insolvencia y los
            procedimientos no cesan en un plazo de 90 días; o
          </p>
          <p>
            C. El Usuario incurre en alguna conducta contraria a la Ley y/o que afecte los derechos de CPM y/o de
            terceros.
          </p>
        </div>
        <p>
          Asimismo, CPM podrá limitar, suspender o cancelar los Servicios que presta, así como las cuentas de usuario en
          los siguientes casos:
        </p>
        <div className="p-tab">
          <p>1. Si el Usuario no cumple con los presentes Términos y Condiciones;</p>
          <p>
            2. Si el Usuario utiliza los Servicios de manera que genere una responsabilidad legal para CPM o afecte el
            uso de los Servicios por parte de terceros; o
          </p>
          <p>3. Si CPM estuviera investigando una conducta sospechosa por parte del Usuario.</p>
        </div>
        <p>
          Además, en caso de que CPM limite, suspenda o cancele los Servicios, según el motivo, CPM hará todo lo posible
          por comunicarlo, según resulte procedente y/o conveniente para CPM, al Usuario con antelación y darle la
          oportunidad de exportar una copia de la información de la Aplicación. No obstante, pueden darse situaciones
          urgentes en las que es probable que CPM decida que se deben tomar medidas inmediatas sin aviso previo. CPM
          hará los esfuerzos comercialmente razonables para reducir el alcance y la duración de cualquier limitación o
          suspensión de acuerdo con lo establecido en el presente apartado como sea necesario para resolver el hecho que
          motivó dicha acción.
        </p>
        <p>
          Si CPM deja de prestarle los Servicios debido a un incumplimiento repetido o flagrante de los presentes
          Términos y Condiciones, podrá adoptar las medidas necesarias para impedirle que siga usando los Servicios, lo
          que incluye bloquear su dirección IP.
        </p>
        <p>
          Si por cualquier razón, el programa no puede ejecutarse tal y como estaba previsto, incluyendo, alguna
          limitación, la infección por virus de computadora, bugs, la manipulación, intervención no autorizada, el
          fraude, fallas técnicas o cualquier otra causa corrupta o que afecte a la administración, seguridad, equidad,
          integridad o la correcta realización de la promoción, CPM; sus subsidiarias y/o afiliadas se reservan el
          derecho, a su sola discreción para cancelar, demorar, modificar o terminar el programa; previo aviso a las
          autoridades correspondientes y al público en general, siempre y cuando no afecte los derechos de los Usuarios.
        </p>
        <p>XIII. Modificaciones.</p>
        <p>
          El Usuario reconoce que CPM tiene el derecho de modificar en cualquier momento y bajo su discreción los
          Términos y Condiciones establecidas en el presente documento, así como las características de los Servicios.
          En consecuencia, el Usuario deberá revisar atentamente los Términos y Condiciones cada vez que desee utilizar
          la Aplicación, pues estos términos son vinculantes al Usuario y a las actividades desarrolladas a través de la
          Aplicación. El uso de la Aplicación, el Sitio Web y de los Servicios se entenderá como consentimiento tácito
          respecto a las modificaciones que conforman los presentes Términos y Condiciones.
        </p>
        <p>XIV. Leyes Aplicables.</p>
        <p>
          Para la interpretación y cumplimiento de los presentes Términos y Condiciones, así como cualquier contingencia
          jurídica que nazca en relación a los mismos, El Usuario expresamente se somete a la jurisdicción de los
          tribunales competentes de la Ciudad de México, así como a las leyes aplicables en dicha jurisdicción.
        </p>
        <p>XV. Autorización.</p>
        <p>
          El participante que resulte acreedor a un Incentivo dentro del programa, autoriza expresa e irrevocablemente a
          Comercializadora PepsiCo México S. de R.L. de C.V. incluyendo sus controladoras, filiales y/o subsidiaras,
          sucursales, incluyendo sin limitar, PepsiCo Internacional México S. de R.L. de C.V., Gamesa, S. de R.L. de
          C.V., Grupo Sabritas, S. de R.L. de C.V., PepsiCo de México S. de R.L. de C.V. (que en lo sucesivo será
          denominado como “Grupo PepsiCo”) y/o cualquier otra empresa que ésta determine, a difundir en los medios que
          Comercializadora PepsiCo México S. de R.L. de C.V. estime conveniente, su nombre y apellido completo, país y
          ciudad de origen, fotografías y uso de imagen o retrato, videos y en general todos aquellos datos que pudieran
          requerirse con motivo de la difusión de esta promoción, renunciando expresa e irrevocablemente, desde la
          aceptación de las bases, a cualquier tipo de compensación económica, remuneración, regalía o retribución
          alguna por dicho uso.
        </p>
        <p>XVI. Dudas, quejas y aclaraciones</p>
        <p>
          Para la difusión de información relacionada con la Aplicación o el Programa, los únicos medios autorizados por
          CPM son:
        </p>
        <p>Teléfono: 800 901 9500 de lunes a viernes de 9:00am a 17:00 horas.</p>
        <p>Correo electrónico: consumidores.1800@pepsico.com</p>
      </div>
    </div>
  )
}
