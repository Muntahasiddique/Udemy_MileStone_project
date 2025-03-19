function getFlashData(req) {
    const sessionData = req.session.flashedflash;
    req.session.flashedflash = null; // Clear session data after retrieving it
    return sessionData;
  }
  
  function flashDatatoSession(req, data, action) {
    req.session.flashedflash = data;
    req.session.save(action);
  }
  
  module.exports = { getFlashData, flashDatatoSession }; // ✅ Ensure the function names match
  