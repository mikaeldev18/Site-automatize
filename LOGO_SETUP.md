# 📸 Configuração da Logo

## Passos para Adicionar Sua Logo ao Site

### 1. **Salve as Imagens PNG**

Você precisa adicionar 2 versões da sua logo no diretório `public/`:

```
Site_automatize/
├── public/
│   ├── logo.png           ← Logo para o Header (versão com fundo branco)
│   └── logo-footer.png    ← Logo para o Footer (versão com fundo cinza)
├── app/
├── components/
└── ...
```

### 2. **Como Salvar as Imagens**

**Opção A: Manual**
- Salve a primeira imagem PNG como `logo.png` em `public/`
- Salve a segunda imagem PNG como `logo-footer.png` em `public/`

**Opção B: Via Terminal**
```bash
# Copiar as imagens (substitua os caminhos pelos reais)
cp "C:\Users\mikae\Downloads\logo_automatize.png" "C:\Users\mikae\OneDrive\Área de Trabalho\claude\Site_automatize\public\logo.png"
cp "C:\Users\mikae\Downloads\logo_automatize_cinza.png" "C:\Users\mikae\OneDrive\Área de Trabalho\claude\Site_automatize\public\logo-footer.png"
```

### 3. **Verificar se Funcionou**

Acesse `http://localhost:3333` e verifique se:
- ✅ Logo aparece no Header (superior esquerdo)
- ✅ Logo aparece no Footer (inferior)
- ✅ Tamanho e proporção estão corretos

### 4. **Ajustar Tamanhos (Se Necessário)**

Se a logo ficar muito pequena ou grande, edite:

**Header:** `components/Header.tsx`
```tsx
<Image
  src="/logo.png"
  width={64}  // ← Aumentar ou diminuir
  height={64} // ← Aumentar ou diminuir
  className="h-16 w-auto"  // ← Ajustar w-16
/>
```

**Footer:** `components/Footer.tsx`
```tsx
<Image
  src="/logo-footer.png"
  width={56}  // ← Aumentar ou diminuir
  height={56} // ← Aumentar ou diminuir
  className="h-14 w-auto"  // ← Ajustar w-14
/>
```

---

## Tamanhos Recomendados

| Local | Largura | Altura | Classe Tailwind |
|-------|---------|--------|-----------------|
| Header | 64px | 64px | w-16 h-auto |
| Footer | 56px | 56px | w-14 h-auto |

## 📝 Notas

- Use imagens PNG com transparência para melhor resultado
- As imagens serão redimensionadas automaticamente pelo Next.js
- O site recarregará automaticamente ao detectar as imagens
