module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 1023),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '854ab20445a058a559a575b76d98bf56'),
    },
  },
});
