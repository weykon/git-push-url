exports.default = function (address) {
    var fs = require("fs");

    const log =
        (...any) =>
            console.log(`\x1b[42m[ - push-mutli - ]:\x1b[0m  ${any}`)

    try {
        if (fs.existsSync('./.git') && fs.existsSync('./.git/config')) {

            log("Add Url: ", address)

            let config = fs.readFileSync('./.git/config')

            config = config.toString()

            const result = config.match(/url.*/, 'g')

            if (!result) return;

            let newConfig = config.replace(result, `${result}\n\turl = ${address}`)

            fs.writeFile('./.git/config',

                newConfig,

                (err) => {
                    if (err) {
                        log(err);
                    } else {
                        log('Current config addresses:\n', newConfig.match(/(?<=url = ).*/g).join('\n'))
                    }
                }
            )

        } else {
            throw ('Sorry, can not find .git folder or ./.git/config file')
        }
    } catch (error) {
        console.error(error)
    }

}