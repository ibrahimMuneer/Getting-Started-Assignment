const famous_person: string = "Narrated Ibn 'Umar";
const reference: string = "Reference	 : Sahih al-Bukhari 8\nIn-book reference	 : Book 2, Hadith 1";

const message = `\n${famous_person}:\n\n"Allah's Messenger (ﷺ) said: Islam is based on (the following) five (principles):\n1. To testify that none has the right to be worshipped but Allah and Muhammad is Allah's Messenger (ﷺ).\n2. To offer the (compulsory congregational) prayers dutifully and perfectly.\n3. To pay Zakat (i.e. obligatory charity).\n4. To perform Hajj. (i.e. Pilgrimage to Mecca)\n5. To observe fast during the month of Ramadan."\n\n${reference}`;

//Message variable is intentionally left without declaring type as TS implicitly know that the variable is a string type.

console.log(message);


export{};