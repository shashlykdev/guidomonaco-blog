#!/bin/bash

# Update events page
perl -i -0pe 's/← Back to Home\n          <\/Link>\n          <h1 className="text-5xl font-normal text-white" style=\{ fontFamily: .Georgia, serif. \}>\n            Florence Events & Festivals\n          <\/h1>/← Back to Home\n          <\/Link>\n          <div className="mb-4">\n            <Image \n              src="\/logo.png" \n              alt="Guido Monaco B&B" \n              width={250} \n              height={167} \n              priority\n            \/>\n          <\/div>\n          <h1 className="text-4xl font-normal text-white" style={ fontFamily: '\''Georgia, serif'\'' }>\n            Florence Events & Festivals\n          <\/h1>/g' app/events/page.tsx

echo "Headers updated"
