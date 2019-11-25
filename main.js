import DoMath from "./file1.js"
import _ from "lodash"
import './styles.scss'

var global = "this is a global var";

console.log(DoMath.unchangeableNumber);
console.log(DoMath.add(1,7))
console.log(DoMath.subtract(1,1))
console.log(_.random(1, 300))

console.log('Is running')




