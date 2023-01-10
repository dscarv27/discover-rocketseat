import './styles.css'

export type CardProps = {
    name: string;
    time: string | number;
}

export function Card(props: CardProps){ //desestruturando com {}, não precisa chamar a propriedade
    return (
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}