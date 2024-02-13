const prisma = require("../models/prisma");

exports.findUserByEmailOrMobile = (emailOrMobile) =>
  prisma.user.findFirst({
    where: {
      OR: [{ email: emailOrMobile }, { mobile: emailOrMobile }],
    },
  });

exports.createUser = (data) => prisma.user.create({ data });

exports.login = (input) =>
  prisma.user.findFirst({
    where: {
      OR: [{ email: input.email }, { mobile: input.mobile }],
    },
  });

exports.findUserById = (id) => prisma.user.findUnique({ where: { id } });

exports.updateUserById = (data, id) =>
  prisma.user.update({ data, where: { id } });
