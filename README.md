# BorrowMy

### Final project for salt
#### Team: TheVoyagers

![alt text](https://github.com/Kevin-S1/salt_final_project/blob/main/image1.gif "App demo")

##### How to run:
- dotnet restore in project folder
- npm i in ClientApp
- dotnet run

** Currently no working database connected to project, so the toy pages will be empty.

##### Functionalities:
- Register/login through Auth0
- Add a toy to lend out including following fields:
    - Title
    - Description
    - Image upload
    - Category dropdown
    - Age category dropdown
- Reserve someone else's toy.
- Search and Filter toys

##### Technologies:
- .NET WebAPI
- React (with Typescript)
- Azure DB (omitted from this repo)
- Firebase file storage for user images.
- Auth0 authentication
