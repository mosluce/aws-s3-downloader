"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObject = exports.listObjectVersions = void 0;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _util = _interopRequireDefault(require("util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const s3 = new _awsSdk.default.S3();

const listObjectVersions = _util.default.promisify(s3.listObjectVersions.bind(s3));

exports.listObjectVersions = listObjectVersions;

const getObject = _util.default.promisify(s3.getObject.bind(s3));

exports.getObject = getObject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvczMuanMiXSwibmFtZXMiOlsiczMiLCJBV1MiLCJTMyIsImxpc3RPYmplY3RWZXJzaW9ucyIsInV0aWwiLCJwcm9taXNpZnkiLCJiaW5kIiwiZ2V0T2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxFQUFFLEdBQUcsSUFBSUMsZ0JBQUlDLEVBQVIsRUFBWDs7QUFFTyxNQUFNQyxrQkFBa0IsR0FBR0MsY0FBS0MsU0FBTCxDQUNoQ0wsRUFBRSxDQUFDRyxrQkFBSCxDQUFzQkcsSUFBdEIsQ0FBMkJOLEVBQTNCLENBRGdDLENBQTNCOzs7O0FBR0EsTUFBTU8sU0FBUyxHQUFHSCxjQUFLQyxTQUFMLENBQWVMLEVBQUUsQ0FBQ08sU0FBSCxDQUFhRCxJQUFiLENBQWtCTixFQUFsQixDQUFmLENBQWxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFXUyBmcm9tICdhd3Mtc2RrJztcbmltcG9ydCB1dGlsIGZyb20gJ3V0aWwnO1xuXG5jb25zdCBzMyA9IG5ldyBBV1MuUzMoKTtcblxuZXhwb3J0IGNvbnN0IGxpc3RPYmplY3RWZXJzaW9ucyA9IHV0aWwucHJvbWlzaWZ5KFxuICBzMy5saXN0T2JqZWN0VmVyc2lvbnMuYmluZChzMylcbik7XG5leHBvcnQgY29uc3QgZ2V0T2JqZWN0ID0gdXRpbC5wcm9taXNpZnkoczMuZ2V0T2JqZWN0LmJpbmQoczMpKTtcbiJdfQ==