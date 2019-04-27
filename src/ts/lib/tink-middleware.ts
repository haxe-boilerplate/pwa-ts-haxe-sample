export default function buildTinkMiddleware(tink) {
  return (req, res, next) => {
    console.log('KAWABANGA');
    next();
  };
}
