# ToastMessage

The `ToastMessage` component extends `Box`.

Toast messages are small alerts that provide updates about a process. Use toast messages for non-critical information about what’s happening within your dApp. They shouldn't be used to notify the user that they need to do something.

<!-- STORY -->

### Usage
```jsx
import { ToastMessage } from 'rimble-ui'
```

```jsx
<ToastMessage message={'Write update here [Required]'}/>
```

```jsx
<ToastMessage
  message={'Write update here [Required]'}
  secondaryMessage={'Supporting information for update [Optional]'}
  icon={'InfoOutline'}
  actionText={'Action'}
  actionHref={'#!'}
/>
```

```jsx
<ToastMessage.Processing message={'Processing 0.00018 ETH payment'} />

<ToastMessage.Success
  message={'ETH sent'}
  secondaryMessage={'You have 1.03 Ether (ETH) remaining'}
/>

<ToastMessage.Failure
  message={'Payment failed'}
  secondaryMessage={'You don&#39;t have enough Ether (ETH)'}
  actionText={'Buy ETH'}
  actionHref={'#!'}
/>
```

### mount `<ToastMessage.Provider />`

```jsx
<ToastMessage.Provider ref={node => window.toastProvider = node} />
```

### call `window.toastProvider.addMessage()`

```jsx

<Button onClick={() => window.toastProvider.addMessage('Write update here [Required]')}>
  Preview "addMessage.default"
</Button>

<Button onClick={() => window.toastProvider.addMessage('[Processing payment...]', {
    secondaryMessage: '',
    actionHref: 'https://etherscan.io/tx/0xcbc921418c360b03b96585ae16f906cbd48c8d6c2cc7b82c6db430390a9fcfed',
    actionText: 'View on Etherscan',
    variant: 'processing',
  })}
>
  Preview "addMessage.processing"
</Button>

<Button onClick={() => window.toastProvider.addMessage('[ETH sent]', {
    secondaryMessage: '[You have 1.03 Ether remaining]',
    variant: 'success',
  })}
>
  Preview "addMessage.success"
</Button>

<Button onClick={() => window.toastProvider.addMessage('[Payment failed]', {
    secondaryMessage: '[You don&#39;t have enough Ether (ETH)]',
    actionHref: 'https://www.coinbase.com/',
    actionText: 'Buy ETH',
    variant: 'failure',
  })}
>
  Preview "addMessage.failure"
</Button>

```

### call `window.toastProvider.removeMessage()`

```jsx
<Button onClick={() => window.toastProvider.removeMessage()}>
Preview "RemoveMessage"
</Button>
```
