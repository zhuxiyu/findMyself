假设我有一个干净的抽象类A
```javascript
abstract class A {
    abstract m(): void;
}
```
在继承(extends)方面，就像C#或者java里面那样，我可以像下面这样来继承这个抽象类：

```javascript
//TypeScript
class B extends A{
}
```
但是在实现方面（implement），在TypeScript中也可以去implement一个类：

```javascript
class C implements A {
    m(): void { }
}
```
那么问题来了：类B和类C在行为上有什么不同？我该如何选择？

解答：
implements关键字将类A当作一个接口，这意味着类C必须去实现定义在A中的所有方法，无论这些方法是否在类A中有没有默认的实现。同时，也不用在类C中定义super方法。
而就像是extends关键字本身所表达的意思一样，你只需要实现类A中定义的虚方法，并且关于super的调用也会有效。
我想在抽象方法的情况下，这并没有什么区别。但是很少有只使用抽象方法的类，如果只使用抽象方法，最好将其转换为接口。