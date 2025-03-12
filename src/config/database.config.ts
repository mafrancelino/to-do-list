export default () => ({
  database: {
    host: String(process.env.DATABASE_HOST || 'localhost'),
    port: Number(process.env.DATABASE_PORT) || 5432,
    user: String(process.env.DATABASE_USER || 'postgres'),
    password: String(process.env.DATABASE_PASSWORD || 'postgres'),
    name: String(process.env.DATABASE_NAME || 'new_huddle'),
  },
})
