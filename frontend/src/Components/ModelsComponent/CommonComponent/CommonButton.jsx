import Button from 'react-bootstrap/Button';

const CommonButton = (props) => {

    return (
        <>
            <Button className={props.classData} variant={props.variant}>{props.icon}{props.title}</Button>
        </>
    )
}

export default CommonButton