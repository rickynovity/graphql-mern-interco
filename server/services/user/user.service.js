import User from "./schema.js";
import bcrypt from "bcryptjs";

const UserService = {
  getUsers: async () => {
    try {
      const totalUsers = await User.countDocuments();
      console.log("All users : ", totalUsers);
      return await User.find();
    } catch (error) {
      throw new Error(`Error retrieving users: ${error.message}`);
    }
  },

  getUser: async (id) => {
    try {
      // return await  User.findOne(id)
      console.log("SERVICE_FIND_ONE : ", id);
      return await User.findById(id);
    } catch (error) {
      throw new Error(`Error retrieving user: ${error.message}`);
    }
  },

  authUser: async (userContext) => {
    try {
      return await userContext.getUser();
    } catch (error) {
      throw new Error(`Error in authUser: ${error.message}`);
    }
  },

  signUp: async (signUpUserData, userContext) => {
    try {
      const { email, fullName, password, gender } = signUpUserData;
      if (!email || !fullName || !password || !gender) {
        throw new Error("All fields are required");
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("User already exists");
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const replaceSpacesWithPlus = (fullName) => {
        const words = fullName.split(" ");
        const modifiedFullName = words.slice(0, 2).join("+");
        return modifiedFullName;
      };
      const modifiedFullName = replaceSpacesWithPlus(fullName);

      const newUser = new User({
        fullName,
        email,
        password: hashedPassword,
        gender,
        profilePicture: `https://avatar.iran.liara.run/username?username=${modifiedFullName}`,
      });
      await newUser.save();
      await userContext.login(newUser);
      return newUser;
    } catch (error) {
      console.error("Error in signUp: ", error);
      throw new Error(error.message || "Internal server error");
    }
  },

  login: async (loginUserData, userContext) => {
    try {
      const { email, password } = loginUserData;
      if (!email || !password) throw new Error("All fields are required");
      const { user } = await userContext.authenticate("graphql-local", {
        email,
        password,
      });

      await userContext.login(user);
      return user;
    } catch (error) {
      console.error("Error in login:", error);
      throw new Error(error.message || "Internal server error");
    }
  },
  logout: async (logOutUserContext) => {
    try {
      await logOutUserContext.logout();
      logOutUserContext.req.session.destroy((error) => {
        if (error) throw error;
      });
      logOutUserContext.res.clearCookie("connect.sid");

      return { message: "Logged out successfully" };
    } catch (error) {
      console.error("Error in logout:", error);
      throw new Error(error.message || "Internal server error");
    }
  },
};

export default UserService;
