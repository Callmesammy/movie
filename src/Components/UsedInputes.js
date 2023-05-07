export const Message = ({label, placeholder}) => {
return (
<div className="text-sm w-full">
<label className="text-brd font-semibold">{label}</label>
<textarea className="w-full h-24 p-6 bg-maint rounded border border-brd"
 placeholder={placeholder}>
 </textarea>
</div>
);
};
export const Select = ({label, options, onChange}) => {
return (
<>
<label className="text-brd font-semibold">{label}</label>
<select className="w-full px-6 py-4 rounded border bg-maint border-brd text-txt"
 onChange={onChange}>
{options.map((o, i) => ((<option key={i} value={o?.value}>{o?.title}</option>)))}
</select>
</>
    )};