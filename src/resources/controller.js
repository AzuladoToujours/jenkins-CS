const sayHello = () => ({message: 'Hola Raulito desde Jenkins-cs'});

const sayHelloController = (req,res) => {
    const hello = sayHello()

    return res.status(200).send(hello.message)
}

module.exports = {sayHelloController, sayHello}