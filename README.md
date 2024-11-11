# ingenieria_proyecto
se debe instalar wildfly y seguir los siguentes pasos:
  -descomprimir carpeta 
  -ingresar en el editor de codigo a esta ruta cd /rutaDeCadaUno/wildfly-34.0.0.Final\standalone\configuration
  -en el editor seleccionar el archivo standalone.xml y suplanatar el codigo de la linea 252-255 con el siguiente codigo:
  <properties-realm name="ManagementRealm">
        <users-properties path="mgmt-users.properties" relative-to="jboss.server.config.dir" digest-realm-name="ManagementRealm"/>
        <groups-properties path="mgmt-groups.properties" relative-to="jboss.server.config.dir"/>
  </properties-realm>
  esto para que no pida autenticacion la pagina
  




