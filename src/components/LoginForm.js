import {Card, Form, Input, Button} from './form';

const LoginForm = () => {
    return(
     <Card>
        <Form>
            <Input defaultValue ="Enter Your email" type="email"/>
            <Input defaultValue ="Enter your password" type="password"/>
            <Button>Log in</Button>
        </Form>
     </Card>   
    )
}

export default LoginForm;