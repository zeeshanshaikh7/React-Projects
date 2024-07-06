# Currency Converter

A simple React application to convert currencies using real-time exchange rates.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Custom Hooks](#custom-hooks)
- [API Used](#API-Used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/currency-converter.git
    ```

2. Navigate to the project directory:
    ```bash
    cd currency-converter
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.

2. Enter the amount you want to convert.

3. Select the currencies you want to convert from and to.

4. Click the "Convert" button to see the converted amount.

5. You can also use the "Swap" button to switch the currencies.

## Components

### `App`

The main component that handles the state and logic for currency conversion.

### `InputBox`

A reusable input component for entering the amount and selecting the currency.

#### Props:
- `label`: Label for the input box.
- `amount`: The amount to be converted.
- `onAmountChange`: Callback for handling changes to the amount.
- `onCurrencyChange`: Callback for handling changes to the currency.
- `currencyOptions`: List of available currencies.
- `selectCurrency`: Currently selected currency.
- `amountDisable`: Disable the amount input.
- `currencyDisable`: Disable the currency select dropdown.
- `className`: Additional CSS classes for the component.

## Custom Hooks

### `useCurrencyInfo`

Fetches the latest currency exchange rates for a given currency.

#### Parameters:
- `currency`: The base currency to fetch rates for.

#### Returns:
- An object containing the exchange rates for the base currency.

## API Used
- https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
- change currency with actual currency like usd or inr
  
## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.


## Author

- **Shaikh Zeeshan**
- GitHub: [zeeshanshaikh7](https://github.com/zeeshanshaikh7)
