//reaproveitar tipos em variaveis diferentes
//facilita a manutenção da tipagem

type IdType = string | number | undefined;

let userId: IdType;
let adminId: IdType;

userId = 1;
userId = '1';
userId = undefined;

adminId = 1;
adminId = '2';
adminId = undefined;