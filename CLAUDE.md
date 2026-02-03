# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Idioma

Todas as conversas devem ser conduzidas em português brasileiro (pt-br).

## Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento (hot-reload)
npm run start:dev

# Rodar em modo produção
npm run start:prod

# Build do projeto
npm run build

# Lint (com auto-fix)
npm run lint

# Formatação com Prettier
npm run format

# Testes unitários
npm run test

# Testes unitários em modo watch
npm run test:watch

# Testes e2e
npm run test:e2e

# Testes com cobertura
npm run test:cov

# Rodar um único teste
npm run test -- --testNamePattern="nome do teste"
npm run test -- src/arquivo.spec.ts
```

## Arquitetura

Este é um projeto NestJS v11 com TypeScript. Estrutura padrão do NestJS:

- **src/main.ts** - Bootstrap da aplicação (porta 3000 ou variável `PORT`)
- **src/app.module.ts** - Módulo raiz que registra controllers e providers
- **src/app.controller.ts** - Controller principal
- **src/app.service.ts** - Service principal
- **test/** - Testes e2e (arquivos `*.e2e-spec.ts`)

### Padrões NestJS

- Arquivos de teste unitário ficam junto ao código fonte com sufixo `.spec.ts`
- Testes e2e ficam na pasta `test/` com sufixo `.e2e-spec.ts`
- Usar decorators do NestJS (@Module, @Controller, @Injectable, @Get, etc.)

## Configurações Importantes

### TypeScript
- Target: ES2023
- Module: nodenext
- strictNullChecks habilitado
- noImplicitAny desabilitado

### ESLint
- `@typescript-eslint/no-explicit-any`: off
- `@typescript-eslint/no-floating-promises`: warn
- `@typescript-eslint/no-unsafe-argument`: warn

### Prettier
- singleQuote: true
- trailingComma: all
- endOfLine: auto
