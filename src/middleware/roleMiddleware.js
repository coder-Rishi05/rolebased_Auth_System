const authorizeRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "acess denied" });
    } else res.status(201).json({ message: "login sucessfully" });
  };
};

export default authorizeRole;
