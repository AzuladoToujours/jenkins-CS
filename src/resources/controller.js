const sayHello = () => ({message: 'Hola desde Jenkins-cs v3'});

const sayHelloController = (req,res) => {
    const hello = sayHello()

    return res.status(200).send(hello.message)
}

module.exports = {sayHelloController, sayHello}