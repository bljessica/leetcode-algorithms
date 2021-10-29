/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
  const set = new Set()
  emails.forEach(email => {
    const arr = email.split('@')
    let localStr = arr[0].replace(/\./g, '').split('+')[0]
    set.add(localStr + '@' + arr[1])
  })
  return set.size
};