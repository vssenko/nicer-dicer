function HomeController($scope,$timeout) {
    $scope.rowCollection = [
        { name: 'Виталя'},
        { name: 'Эльдар' },
        { name: 'Сергей' },
        { name: 'Юра' },
        { name: 'Олег' },
        { name: 'Леша' },
        { name: 'Андрей' }];
    $scope.addPerson = function () {
        bootbox.prompt('Enter name:', function (result) {
            if (result) {
                var newPerson = {};
                newPerson.name = result;
                $timeout(function () {
                    $scope.rowCollection.push(newPerson);
                });
            }
        });
    }

    $scope.removePerson = function (row) {
        var index = $scope.rowCollection.indexOf(row);
        if (index !== -1) {
            $scope.rowCollection.splice(index, 1);
        }
    }


}