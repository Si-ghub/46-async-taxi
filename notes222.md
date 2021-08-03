Be setInterval su setTimeout

```js
class Taxi {

    print(km) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (typeof km === 'number') {
                    res(`Nuvaziuota: ${km} km.`);
                } else {
                    rej('Kilometrai turi buti skaiciai.');
                }
            }, 1000);
        })
    }

    async drive(distance) {
        for (let i = 1; i <= distance; i++) {
            await this.print(i)
                .then((msg) => {
                    console.log(msg);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        console.log('Kelione baigta.');
    }
```
