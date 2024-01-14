# Next.js Domain Selling Website

This project is a  application designed for selling a domain. It includes features for domain showcasing, contact forms, and email integration for inquiries.

- [Getting Started](#getting-started)
- [Docker Setup](#docker-setup)
- [Environment Setup](#environment-setup)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/talhak55/nextjs-selldomain.git
cd nextjs-selldomain
````

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Setup
Before running the application, ensure you have the following environment variables set up in your `.env.local` file:

- `DOMAIN`: The domain name you are selling (e.g., `example.com`).
- `EMAIL_TO`: The email address where you want to receive inquiries (e.g., `example@example.com`).
- `SMTP_HOST`: Your SMTP server host (e.g., `mail.example.com`).
- `SMTP_PORT`: Your SMTP server port (e.g., `465`).
- `SMTP_USER`: Your SMTP username (e.g., `example@example.de`).
- `SMTP_PASSWORD`: Your SMTP password.
- `RECAPTCHA_SITE_KEY`: Your Google reCAPTCHA site key.
- `RECAPTCHA_SECRET_KEY`: Your Google reCAPTCHA secret key.

## Docker Setup
Build and run Docker Image
```
# Build the image
docker build -t nextjs-selldomain .

# Run the container
docker run -p 3000:3000 \
-e DOMAIN=example.com \
-e EMAIL_TO=example@example.com \
-e SMTP_HOST=mail.example.com \
-e SMTP_PORT=465 \
-e SMTP_USER=example@example.com \
-e SMTP_PASSWORD=password \
-e RECAPTCHA_SITE_KEY= \
-e RECAPTCHA_SECRET_KEY= \
nextjs-selldomain
```

## Features

- **Domain Showcase**: Highlights the key features and benefits of the domain.
- **Contact Form**: Integrated with email for potential buyers to make inquiries.
- **reCAPTCHA Integration**: Protects the contact form from spam and abuse.

## Contributing

Contributions to improve this project are welcome. Please create a pull request with your proposed changes.

## License

MIT License

Copyright (c) 2024 talhak55

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
