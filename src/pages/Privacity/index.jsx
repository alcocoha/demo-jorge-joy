import { useEffect } from 'react'
import './styles.scss'

export default function Privacity() {
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: - 90 })
  }, [])
  return (
    <div className="privaticy-container">
      <h1 className="privaticy-container__h1">Aviso de privacidad</h1>
      <div className="privaticy-container__p">
        <p>Identidad y domicilio del Responsable</p>
        <p>
          La sociedad responsable del tratamiento del tratamiento de sus datos será Comercializadora Pepsico México, S.
          de R.L. de C.V. (en adelante, “CPM”) con domicilio en Bosque de Duraznos 67, Col. Bosque de las Lomas, Miguel
          Hidalgo, 11700, CDMX.
        </p>
        <p>Categorías de datos personales sujetas al tratamiento</p>
        <p>
          Para cumplir con las finalidades del tratamiento señaladas en el presente aviso de privacidad, es necesario
          recabar y dar tratamiento a los siguientes datos personales:
        </p>
        <ul>
          <li>
            Datos de identificación, incluyendo su imagen personal a través de las fotografías y/o videos que de forma
            voluntaria usted comparta con nosotros a través de la Aplicación, previo otorgamiento de los permisos
            correspondientes sobre uso de la cámara y galería del dispositivo.
          </li>
          <li>Datos de contacto,</li>
          <li>Datos de ubicación,</li>
          <li>
            Información técnica del dispositivo que usted emplee para acceder a la Aplicación, incluyendo datos
            relativos a las características del equipo, localización geográfica del dispositivo e información que se
            genere a partir del uso de la Aplicación.
          </li>
        </ul>
        <p>
          En caso de que usted se registre a la aplicación a través de su perfil de Facebook, iOs o Google, podremos
          recabar los datos de inicio de sesión en dichas plataformas, así como los datos que usted haya hecho públicos
          a través de su perfil en dichas plataformas.
        </p>
        <p>Tratamiento de datos personales sensibles</p>
        <p>
          Para efectos del presente Aviso de Privacidad, CPM no dará tratamiento a datos personales de carácter
          sensible.
        </p>
        <p>Finalidades primarias</p>
        <p>CPM tratará sus datos personales para realizar las siguientes finalidades primarias:</p>
        <ul>
          <li>
            Para identificarle y permitirle realizar su registro dentro del sitio web y la aplicación con el fin de
            crearle un perfil dentro de los mismos.
          </li>
          <li>Para identificarle como usuario del sitio web y la aplicación.</li>
          <li>Para comprobar la veracidad de la información que nos proporciona.</li>
          <li>
            Para permitirle participar en las dinámicas a través de la cuales usted podrá acumular puntos dentro del
            sitio web y la aplicación.
          </li>
          <li>
            Para permitirle redimir los puntos que usted ha acumulado por los premios disponibles en el sitio web y en
            la aplicación.
          </li>
          <li>
            Para permitirle participar concursos, promociones especiales o sorteos en los que podrá participar por los
            premios que apliquen a dichos concursos, promociones o sorteos.
          </li>
          <li>
            Para realizarle la entrega de los productos y/o premios que usted obtenga a través del sitio web y la
            aplicación.
          </li>
          <li>Para conocer sus preferencias de consumo.</li>
          <li>
            Para identificar y prevenir posibles conductas ilícitas que pudieran significar una violación de las
            disposiciones legales vigentes o de nuestros Términos y Condiciones.
          </li>
          <li>
            Para atender sus consultas, aclaraciones y/o reclamaciones en relación con los servicios del sitio web y la
            aplicación.
          </li>
          <li>
            Para dar cumplimiento a nuestras obligaciones y/o requerimientos por partes de autoridades competentes en
            términos de la normatividad aplicable.
          </li>
        </ul>

        <p>Finalidades secundarias</p>
        <p>
          Si usted no se opone, y en caso de que le sea aplicable, CPM tratará sus datos personales para las siguientes
          finalidades:
        </p>
        <ul>
          <li>Contactarle para invitarle a participar en encuestas y/o formularios de datos.</li>
          <li>Elaborarle un perfil con base en sus hábitos y preferencias de consumo.</li>
          <li>Mostrarle y/o enviarle publicidad que pueda resultar de su interés.</li>
          <li>Para fines estadísticos de evaluación de la empresa.</li>
        </ul>
        <p>
          En caso de que no desee que sus datos personales sean tratados para alguna o todas las finalidades
          adicionales, desde este momento usted nos puede comunicar lo anterior al correo datos.personales@pepsico.com
        </p>
        <p>Transferencias</p>
        <p>
          CPM podrá transferir sus datos personales, tanto a entidades nacionales como extranjeras, sin requerir de su
          consentimiento a:
        </p>

        <ul>
          <li>
            Empresas afiliadas, subsidiarias y/o entidades controladoras, nacionales o extranjeros, que operan bajo las
            mismas políticas internas en materia de protección de datos personales para las finalidades informadas en el
            presente Aviso de Privacidad.
          </li>
          <li>Autoridades competentes en los casos previstos por la normatividad aplicable.</li>
        </ul>
        <p>Medios para ejercer Derechos ARCO</p>
        <p>
          Usted o su representante legal podrá ejercer cualquiera de los derechos de acceso, rectificación, cancelación
          u oposición (en lo sucesivo “Derechos ARCO”), así como revocar su consentimiento para el tratamiento de sus
          datos personales enviando un correo electrónico a nuestro Departamento de Protección de Datos Personales a la
          dirección datos.personales@pepsico.com donde se le atenderá en tiempo y forma.
        </p>
        <p>
          Para que nuestro Departamento de Protección de Datos Personales pueda darle seguimiento a su solicitud, usted
          o su representante legal deberá acreditar correctamente su identidad acompañando a su solicitud una copia de
          alguna de las identificaciones oficiales vigentes que se señalan en el mismo.
        </p>
        <p>
          En caso de que la información proporcionada sea errónea o insuficiente, o bien, no se acompañen los documentos
          de acreditación correspondientes, nuestro Departamento de Protección de Datos Personales, dentro de los cinco
          (5) días hábiles siguientes a la recepción de la solicitud, podrá requerirle que aporte los elementos o
          documentos necesarios para dar trámite a la misma. Usted contará con diez (10) días hábiles para atender el
          requerimiento, contados a partir del día siguiente en que lo haya recibido. De no dar respuesta en dicho
          plazo, se tendrá por no presentada la solicitud correspondiente.
        </p>
        <p>
          Nuestro Departamento de Protección de Datos Personales le comunicará la determinación adoptada, en un plazo
          máximo de veinte (20) días hábiles contados desde la fecha en que se recibió la solicitud, a efecto de que, si
          resulta procedente, haga efectiva la misma dentro de los quince (15) días hábiles siguientes a que se
          comunique la respuesta.
        </p>
        <p>Opciones y medios para limitar el uso o divulgación de sus datos personales</p>
        <p>
          Usted podrá limitar el uso o divulgación de sus datos personales enviando su solicitud a nuestro Departamento
          de Protección de Datos Personales a la dirección datos.personales@pepsico.com Los requisitos para acreditar su
          identidad, así como el procedimiento para atender su solicitud se regirán por los mismos criterios señalados
          en el apartado anterior.
        </p>
        <p>
          En caso de que su solicitud resulte procedente, nuestro Departamento de Protección de Datos Personales lo
          registrará en el listado de exclusión propio de CPM.
        </p>
        <p>Cambios al Aviso de Privacidad</p>
        <p>
          CPM se reserva el derecho, bajo su exclusiva discreción, de cambiar, modificar, agregar o eliminar partes del
          presente Aviso de Privacidad en cualquier momento. En tal caso, CPM le informará de los cambios por el mismo
          medio que ha puesto a su disposición este Aviso de Privacidad.
        </p>
        <p>Última actualización</p>
        <p>Abril, 2021.</p>
      </div>
    </div>
  )
}
