# microservice-auth-gateway
get way and gensec  services ........


using:
1:getway/npm run start:dev
2:gensec/npm run start:dev (successfully run nest js application)

3:Send Post Method Request to http://localhost:3000/register usign postman or other
body:
{
  "username": "AsadShahi",
  "password": "12345"
}
message:"successfully registed user"


if user name is =error it will be return error 400  
if (data.username === 'error') {
      throw new RpcException('Username is not allowed');
}

body:
{
  "username": "error",
  "password": "1234"
}
