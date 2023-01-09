/** algumas convenções para generics:
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 */



function useState<T extends string | number = string>(){ //caso não escolha a tipagem do generic, o padrão será string(nesse ex)
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }

    return { get, set };
}

let newState = useState(); //a tipagem é definida no momento de passar a variável
newState.get();
// newState.set(123); //não é permitido
newState.set('Daniel');