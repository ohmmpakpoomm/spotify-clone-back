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

exports.updateUserByEmailOrMobile = (password, emailOrMobile) => {
  if (emailOrMobile == /^[0-9]{10}$/) {
    return prisma.user.update({
      data: { password },
      where: { mobile: emailOrMobile },
    });
  } else {
    return prisma.user.update({
      data: { password },
      where: { email: emailOrMobile },
    });
  }
};

exports.findUserById = (id) => prisma.user.findUnique({ where: { id } });
