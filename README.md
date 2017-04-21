# contact-app-part-2
WEB API, REST, AJAX, JSON, HTML, CSS, C#, SQL

Client with HTML, TypeScript, Angular4, cascading stylesheets, ajax

Server with C#, WEB API, REST

Sandbox testing environment:

- Windows 7
  - Virtual Box
    - MariaDB
  - Microsoft Visual Studio
  - IntelliJ IDEA
  
## Data storage 

### Local Storage

#### Setting system up

- start IntelliJ IDEA
  - open client project
  - in Terminal window execute command:

    ng serve --environment=local
    
This allows definitions in file _environment.local.ts_ to be used.
No real backend system is used in this case, so VirtualBox and Microsoft Visual Studio are not needed.

### Database

#### Requirements

- VirtualBox installed
  - Mint Linux installed
    - MariaDB installed 
      - database created
        - table _contacts_ created
- MariaDB socket tunneling enabled

#### Setting system up

- start VirtualBox
  - start Mint Linux
- start Microsoft Visual Studio
  - open project file _ContactService.sln_
  - start service
- start IntelliJ IDEA
  - open client project
  - in Terminal window execute command:

    ng serve --environment=dev
    
This allows environment definition file _environment.dev.ts_ to be used.
Client will be use server's REST API to retrieve and store data (contacts).
