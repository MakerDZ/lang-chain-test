
## 🧠 AI search based on custom data

Have you ever imagined having a user experience where you can search your custom data, just like using ChatGPT? You can easily achieve this by using JavaScript. Simply input your OpenAI ChatGPT API key and custom database, and witness the magic unfold!


## ⚙️ Installation & Setup

### clone the repository

To test the project, go to [github](https://github.com/MakerDZ/lang-chain-test) and clone the repo.

```bash
git clone https://github.com/MakerDZ/lang-chain-test.git
```

### install dependencies

Intall necessary dependenciese by using your favourite package manager.

```bash
npm install
```

```bash
yarn install
```

```bash
pnpm install
```

### setup API key

Go to [OpenAI](https://platform.openai.com/account/api-keys) dashboard, generate an API key, and then create an .env file by referring to the format in the .example.env file.

### custom dataset

To search your custom data using OpenAI, you can feed your dataset into a data.txt file. Any data format is acceptable.

### feel the magic

Go to the `index.ts` file located under the src folder and modify the arguments of the searchCustomData() function. After making the necessary changes, initiate the development query by running the dev command.

```bash
npm dev
```

```bash
yarn dev
```

```bash
pnpm dev
```
