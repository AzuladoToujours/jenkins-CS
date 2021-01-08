const sayHello = () => ({message: 'Test en deploy, test'});

const sayHelloController = (req,res) => {
    const hello = sayHello()

    return res.status(200).send(hello.message)
}

module.exports = {sayHelloController, sayHello}