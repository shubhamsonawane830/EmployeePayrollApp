  const stringifyDate = (date) => {
       const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const newDate = !date ? "undefined" : new Date(Date.parse(date)).tolocateDateString('en-US', options);
      return newDate;
    }

