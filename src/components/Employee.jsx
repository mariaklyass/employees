import { formatDate } from "../services/formatDate";

export function Employee({ employee, displayBirthday = true }) {
  return (
    <article className="px-3 mx-3 mb-3 flex justify-between items-center">
      <div className="flex items-center">
        <img className="w-28 h-28 rounded-full" src={employee.avatarUrl}></img>

        <div className="ml-6">
          <div>
            <header className="flex gap-2">
              <h4 className="font-semibold">{`${employee.firstName} ${employee.lastName}`}</h4>
              {employee.userTag && (
                <p className="text-gray-600">{employee.userTag}</p>
              )}
            </header>
            <p className="capitalize">{employee.position}</p>
          </div>
        </div>
      </div>
      {displayBirthday && <aside>{formatDate(employee.birthday)}</aside>}
    </article>
  );
}
