# --- Stage 1: Build Stage ---
    FROM node:18-alpine AS builder

    WORKDIR /app
    
    RUN npm install -g pnpm
    
    COPY package.json pnpm-lock.yaml ./
    RUN pnpm install
    
    COPY public ./public
    COPY components ./components
    COPY hooks ./hooks
    COPY lib ./lib
    COPY pages ./pages
    COPY next.config.ts ./next.config.ts
    COPY tsconfig.json ./tsconfig.json
    COPY next-env.d.ts ./next-env.d.ts
    COPY components.json ./components.json

    RUN pnpm build
    
    
    # --- Stage 2: Production Runtime ---
    FROM node:18-alpine AS runner
    
    WORKDIR /app
    
    RUN npm install -g pnpm
    
    # Copy only what is needed to run
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/package.json ./package.json
    COPY --from=builder /app/next.config.ts ./   # or .ts if needed
    COPY --from=builder /app/tsconfig.json ./tsconfig.json
    
    EXPOSE 3000
    
    ENV NODE_ENV=production
    
    CMD ["pnpm", "start"]
    