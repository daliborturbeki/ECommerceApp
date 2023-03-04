
BE

mkdir ProjectApp
cd ProjectAPP
dotnet
dotnet new sln
dotnet new webapi -n API
dotnet sln add API
dotnet sln list
code .

dotnet tool install --global dotnet-ef
dotnet ef
dotnet ef migrations add InitialCreate -o Data/Migrations
dotnet ef database update

FE

node --version
npm --version
npm install -g @angular/cli@14
ng version
ng new client - y - scss 
ng add ngx-bootstrap
npm i bootstrap
npm i font-awesome