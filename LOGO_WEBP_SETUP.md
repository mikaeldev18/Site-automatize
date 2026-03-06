# 🖼️ Configuração da Logo em WebP

## Como Adicionar Sua Logo

### Passo 1: Salve o Arquivo WebP
Coloque o arquivo `logo.webp` no diretório `public/`:

```
Site_automatize/
├── public/
│   ├── logo.webp  ← Sua logo em WebP (otimizada para web)
│   └── ...outros arquivos
├── app/
├── components/
└── ...
```

**Caminho exato:**
```
C:\Users\mikae\OneDrive\Área de Trabalho\claude\Site_automatize\public\logo.webp
```

### Passo 2: O Site Carregará Automaticamente

Assim que você salvar a imagem, visite:
- **URL:** `http://localhost:3333`

A logo será exibida em:
- ✨ **Header** (superior esquerdo) - Tamanho responsivo
- ✨ **Footer** (inferior esquerdo) - Tamanho responsivo

### Por Que WebP?

✅ **Melhor compressão** - Arquivo 25-35% menor que PNG
✅ **Suporte moderno** - Compatível com todos os navegadores atuais
✅ **Otimizado para web** - Carrega mais rápido
✅ **Melhor SEO** - Melhora o PageSpeed do site

### Se Precisar Ajustar o Tamanho

**Header:** `components/Header.tsx`
```tsx
width={80}  // Ajuste conforme necessário
height={80}
className="h-16 w-auto"
```

**Footer:** `components/Footer.tsx`
```tsx
width={70}  // Ajuste conforme necessário
height={70}
className="h-14 w-auto"
```

## ✅ Pronto!

Seu site está 100% otimizado e pronto para receber a logo em WebP! 🚀
