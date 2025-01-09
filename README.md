# Online Image Process

> 后续开发可能会在 [edisonjwa/s3-image-hosting](https://github.com/edisonjwa/s3-image-hosting) 进行（？

突发奇想做的一个小玩具，解放自己为给博文配图而劳累的双手。

Next.js (App Router) + UnoCSS + sharp + @aws-sdk/client-s3

## 注意事项

请务必配置下述 `.env` 内容：

``` env
R2_ACCOUNT_ID="" // Cloudflare 账户 ID
R2_ACCESS_KEY="" // Cloudflare R2 访问令牌 ID
R2_SECRET_KEY="" // Cloudflare R2 访问令牌密钥
R2_BUCKET_NAME="" // Cloudflare R2 存储桶名称
R2_BUCKET_URL="" // Cloudflare R2 存储桶 URL
```
