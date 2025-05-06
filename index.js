function truncateJsonArrays(json) {
  if (Array.isArray(json)) {
    return json.length > 0 ? [truncateJsonArrays(json[0])] : [];
  } else if (typeof json === 'object' && json !== null) {
    const result = {};
    for (const key in json) {
      result[key] = truncateJsonArrays(json[key]);
    }
    return result;
  }
  return json; 
}
