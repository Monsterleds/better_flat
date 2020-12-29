# Better Flat 🧐
Basicamente, eu estava indignado por conta da função flat não ser da forma que eu esperava, por exemplo:

Imagina você ter 1 array dentro de outro array:

```javascript
   const myFruits = ['apple', 'pear', 'pineapple', ['orange', 'banana'], 'melon'];
   
   myFruits.flat(); // ['apple', 'pear', 'pineapple', 'orange', 'banana', 'melon']; Retornou bonitinho
```

Parece estar tudo certo, agora vamos dificultar um pouco as coisas:

```javascript
   const myFruits = ['apple', 'pear', 'pineapple', ['orange', 'banana', ['grape', 'papaya']], 'melon'];
   
   
   myFruits.flat(2); // ['apple', 'pear', 'pineapple', 'orange', 'banana', 'grape', 'papaya', 'melon']; Retornou legal tbm
```

Nessas situações, em que tem um array dentro de outros arrays, é necessário específicar a profundidade do array que você deseja. Com isso, o flatAll acaba suprindo esse problema, de maneira que mantenha os valores e as posições dos arrays fiéis ao uso do flat usando a profundida máxima dos mesmos.

```javascript
  const myFruits = ['apple', 'pear', 'pineapple', ['orange', 'banana', ['grape', 'papaya']], 'melon'];

  myFruits.flatAll();
```
