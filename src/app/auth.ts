export interface Auth {
}
export interface Register{
  frist_name:string,
  last_name:string,
  age:number|string,
  email:string,
  password:string

}
export interface Login{

  email:string,
  password:string

}
