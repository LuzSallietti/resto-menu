module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '060d92c6a0282c8fa910bfab9c7e5c99'),
  },
});
