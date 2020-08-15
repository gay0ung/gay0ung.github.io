"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _express = require("express");

var _auth = require("../utils/auth.js");

var _UserModel = _interopRequireDefault(require("../models/UserModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// libs
// modules
// import passport from '../passport.js';
// router init
const router = (0, _express.Router)(); // router

router.post('/login', (req, res) => {
  // find the user
  _UserModel.default.findOne({
    username: req.body.username
  }).then(user => {
    // non registered user
    if (!user) {
      res.status(401).send('Authentication failed. User not found.');
    }

    _bcrypt.default.compare(req.body.password, user.password, (error, result) => {
      if (error) {
        res.status(500).send('Internal Server Error');
      }

      if (result) {
        // create token with user info
        const token = (0, _auth.newToken)(user); // current logged-in user

        const loggedInUser = {
          username: user.username,
          nickname: user.nickname
        }; // return the information including token as JSON

        res.status(200).json({
          success: true,
          user: loggedInUser,
          message: 'Login Success',
          token: token
        });
      } else {
        res.status(401).json('Authentication failed. Wrong password.');
      }
    });
  }).catch(error => {
    res.status(500).json('Internal Server Error');
    throw error;
  });
});
router.post('/signup', (req, res) => {
  const {
    username,
    password,
    nickname
  } = req.body; // encrypt password
  // NOTE: 10 is saltround which is a cost factor

  _bcrypt.default.hash(password, 10, (error, hashedPassword) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        error
      });
    } else {
      const newUser = new _UserModel.default({
        username,
        password: hashedPassword,
        nickname
      });
      newUser.save((error, saved) => {
        if (error) {
          console.log(error);
          res.status(409).send(error);
        } else {
          console.log(saved);
          res.send(saved);
        }
      });
    }
  });
}); // TODO: Logout 구현 필요

var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvYXV0aC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJwb3N0IiwicmVxIiwicmVzIiwiVXNlck1vZGVsIiwiZmluZE9uZSIsInVzZXJuYW1lIiwiYm9keSIsInRoZW4iLCJ1c2VyIiwic3RhdHVzIiwic2VuZCIsImJjcnlwdCIsImNvbXBhcmUiLCJwYXNzd29yZCIsImVycm9yIiwicmVzdWx0IiwidG9rZW4iLCJsb2dnZWRJblVzZXIiLCJuaWNrbmFtZSIsImpzb24iLCJzdWNjZXNzIiwibWVzc2FnZSIsImNhdGNoIiwiaGFzaCIsImhhc2hlZFBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsIm5ld1VzZXIiLCJzYXZlIiwic2F2ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFJQTs7QUFDQTs7OztBQVBBO0FBSUE7QUFDQTtBQUlBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHLHNCQUFmLEMsQ0FFQTs7QUFDQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksUUFBWixFQUFzQixDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUNsQztBQUNBQyxxQkFBVUMsT0FBVixDQUFrQjtBQUNoQkMsSUFBQUEsUUFBUSxFQUFFSixHQUFHLENBQUNLLElBQUosQ0FBU0Q7QUFESCxHQUFsQixFQUdHRSxJQUhILENBR1FDLElBQUksSUFBSTtBQUNaO0FBQ0EsUUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVE4sTUFBQUEsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsd0NBQXJCO0FBQ0Q7O0FBQ0RDLG9CQUFPQyxPQUFQLENBQWVYLEdBQUcsQ0FBQ0ssSUFBSixDQUFTTyxRQUF4QixFQUFrQ0wsSUFBSSxDQUFDSyxRQUF2QyxFQUFpRCxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDbEUsVUFBSUQsS0FBSixFQUFXO0FBQ1RaLFFBQUFBLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLHVCQUFyQjtBQUNEOztBQUNELFVBQUlLLE1BQUosRUFBWTtBQUNWO0FBQ0EsY0FBTUMsS0FBSyxHQUFHLG9CQUFTUixJQUFULENBQWQsQ0FGVSxDQUlWOztBQUNBLGNBQU1TLFlBQVksR0FBRztBQUNuQlosVUFBQUEsUUFBUSxFQUFFRyxJQUFJLENBQUNILFFBREk7QUFFbkJhLFVBQUFBLFFBQVEsRUFBRVYsSUFBSSxDQUFDVTtBQUZJLFNBQXJCLENBTFUsQ0FVVjs7QUFDQWhCLFFBQUFBLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JVLElBQWhCLENBQXFCO0FBQ25CQyxVQUFBQSxPQUFPLEVBQUUsSUFEVTtBQUVuQlosVUFBQUEsSUFBSSxFQUFFUyxZQUZhO0FBR25CSSxVQUFBQSxPQUFPLEVBQUUsZUFIVTtBQUluQkwsVUFBQUEsS0FBSyxFQUFFQTtBQUpZLFNBQXJCO0FBTUQsT0FqQkQsTUFpQk87QUFDTGQsUUFBQUEsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQlUsSUFBaEIsQ0FBcUIsd0NBQXJCO0FBQ0Q7QUFDRixLQXhCRDtBQXlCRCxHQWpDSCxFQWtDR0csS0FsQ0gsQ0FrQ1NSLEtBQUssSUFBSTtBQUNkWixJQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCVSxJQUFoQixDQUFxQix1QkFBckI7QUFDQSxVQUFNTCxLQUFOO0FBQ0QsR0FyQ0g7QUFzQ0QsQ0F4Q0Q7QUEwQ0FmLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFNBQVosRUFBdUIsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDbkMsUUFBTTtBQUFFRyxJQUFBQSxRQUFGO0FBQVlRLElBQUFBLFFBQVo7QUFBc0JLLElBQUFBO0FBQXRCLE1BQW1DakIsR0FBRyxDQUFDSyxJQUE3QyxDQURtQyxDQUVuQztBQUNBOztBQUNBSyxrQkFBT1ksSUFBUCxDQUFZVixRQUFaLEVBQXNCLEVBQXRCLEVBQTBCLENBQUNDLEtBQUQsRUFBUVUsY0FBUixLQUEyQjtBQUNuRCxRQUFJVixLQUFKLEVBQVc7QUFDVFcsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlaLEtBQVo7QUFDQSxhQUFPWixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCVSxJQUFoQixDQUFxQjtBQUMxQkwsUUFBQUE7QUFEMEIsT0FBckIsQ0FBUDtBQUdELEtBTEQsTUFLTztBQUNMLFlBQU1hLE9BQU8sR0FBRyxJQUFJeEIsa0JBQUosQ0FBYztBQUM1QkUsUUFBQUEsUUFENEI7QUFFNUJRLFFBQUFBLFFBQVEsRUFBRVcsY0FGa0I7QUFHNUJOLFFBQUFBO0FBSDRCLE9BQWQsQ0FBaEI7QUFLQVMsTUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsQ0FBQ2QsS0FBRCxFQUFRZSxLQUFSLEtBQWtCO0FBQzdCLFlBQUlmLEtBQUosRUFBVztBQUNUVyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVosS0FBWjtBQUNBWixVQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkksS0FBckI7QUFDRCxTQUhELE1BR087QUFDTFcsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlHLEtBQVo7QUFDQTNCLFVBQUFBLEdBQUcsQ0FBQ1EsSUFBSixDQUFTbUIsS0FBVDtBQUNEO0FBQ0YsT0FSRDtBQVNEO0FBQ0YsR0F0QkQ7QUF1QkQsQ0EzQkQsRSxDQTZCQTs7ZUFFZTlCLE0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJzXHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG4vLyBtb2R1bGVzXHJcbi8vIGltcG9ydCBwYXNzcG9ydCBmcm9tICcuLi9wYXNzcG9ydC5qcyc7XHJcbmltcG9ydCB7IG5ld1Rva2VuIH0gZnJvbSAnLi4vdXRpbHMvYXV0aC5qcyc7XHJcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XHJcblxyXG4vLyByb3V0ZXIgaW5pdFxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbi8vIHJvdXRlclxyXG5yb3V0ZXIucG9zdCgnL2xvZ2luJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgLy8gZmluZCB0aGUgdXNlclxyXG4gIFVzZXJNb2RlbC5maW5kT25lKHtcclxuICAgIHVzZXJuYW1lOiByZXEuYm9keS51c2VybmFtZSxcclxuICB9KVxyXG4gICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgIC8vIG5vbiByZWdpc3RlcmVkIHVzZXJcclxuICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoJ0F1dGhlbnRpY2F0aW9uIGZhaWxlZC4gVXNlciBub3QgZm91bmQuJyk7XHJcbiAgICAgIH1cclxuICAgICAgYmNyeXB0LmNvbXBhcmUocmVxLmJvZHkucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQsIChlcnJvciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCgnSW50ZXJuYWwgU2VydmVyIEVycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgIC8vIGNyZWF0ZSB0b2tlbiB3aXRoIHVzZXIgaW5mb1xyXG4gICAgICAgICAgY29uc3QgdG9rZW4gPSBuZXdUb2tlbih1c2VyKTtcclxuXHJcbiAgICAgICAgICAvLyBjdXJyZW50IGxvZ2dlZC1pbiB1c2VyXHJcbiAgICAgICAgICBjb25zdCBsb2dnZWRJblVzZXIgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogdXNlci5uaWNrbmFtZSxcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgLy8gcmV0dXJuIHRoZSBpbmZvcm1hdGlvbiBpbmNsdWRpbmcgdG9rZW4gYXMgSlNPTlxyXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICB1c2VyOiBsb2dnZWRJblVzZXIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdMb2dpbiBTdWNjZXNzJyxcclxuICAgICAgICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKCdBdXRoZW50aWNhdGlvbiBmYWlsZWQuIFdyb25nIHBhc3N3b3JkLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oJ0ludGVybmFsIFNlcnZlciBFcnJvcicpO1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbnJvdXRlci5wb3N0KCcvc2lnbnVwJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQsIG5pY2tuYW1lIH0gPSByZXEuYm9keTtcclxuICAvLyBlbmNyeXB0IHBhc3N3b3JkXHJcbiAgLy8gTk9URTogMTAgaXMgc2FsdHJvdW5kIHdoaWNoIGlzIGEgY29zdCBmYWN0b3JcclxuICBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTAsIChlcnJvciwgaGFzaGVkUGFzc3dvcmQpID0+IHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgZXJyb3IsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyTW9kZWwoe1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcclxuICAgICAgICBuaWNrbmFtZSxcclxuICAgICAgfSk7XHJcbiAgICAgIG5ld1VzZXIuc2F2ZSgoZXJyb3IsIHNhdmVkKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDQwOSkuc2VuZChlcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHNhdmVkKTtcclxuICAgICAgICAgIHJlcy5zZW5kKHNhdmVkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vIFRPRE86IExvZ291dCDqtaztmIQg7ZWE7JqUXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiJdfQ==