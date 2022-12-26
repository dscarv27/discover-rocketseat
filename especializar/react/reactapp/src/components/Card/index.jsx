import './styles.css'

export function Card(props){ //desestruturando com {}, não precisa chamar a propriedade
    return (
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}