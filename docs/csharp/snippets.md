# スニペット

## イベントハンドラ中でセットされる値を待ち合わせる

```csharp
var control = new Control();

var subject = new Subject<SomeValue>();

hubConnection.On<SomeValue>("SomeEvent", v =>
{
    subject.OnNext(v);
    subject.OnCompleted();
});

var eventValue = subject.FirstAsync().PublishLast();
eventValue.Connect();

// イベントのトリガー
var _ = await SomeTrigger();
// イベントハンドラを待ち合わせる。
var value = await eventValue;
```